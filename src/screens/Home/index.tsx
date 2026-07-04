import { useNavigation, useScrollToTop } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useMemo, useRef, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import SearchBar from "../../components/SearchBar";
import { useFavorites } from "../../hooks/useFavorites";
import { usePokemonList } from "../../hooks/usePokemonList";
import { RootStackParamList } from "../../navigation";
import { PokemonListItem } from "../../types/pokemon";
import HomeEmpty from "./components/HomeEmpty";
import HomeError from "./components/HomeError";
import HomeLoading from "./components/HomeLoading";
import { styles } from "./styles";
import HomeSearchEmpty from "./components/HomeSearchEmpty";
import RandomPokemonButton from "../../components/RandomPokemonButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { MAX_POKEMON_ID } from "../../utils/format";

export default function Home() {
	const [search, setSearch] = useState("");

	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const listRef = useRef<FlatList<PokemonListItem>>(null);
	useScrollToTop(listRef);

	const {
		data,
		isLoading,
		isError,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		refetch,
		isRefetching,
	} = usePokemonList();

	const { isFavorite, toggleFavorite } = useFavorites();

	const handleCardPress = useCallback(
		(id: number) => {
			navigation.navigate("Detail", { id });
		},
		[navigation],
	);

	const renderItem = useCallback(
		({ item }: { item: PokemonListItem }) => (
			<PokemonCard
				pokemon={item}
				onPress={handleCardPress}
				isFavorite={isFavorite(item.id)}
				onToggleFavorite={toggleFavorite}
			/>
		),
		[handleCardPress, isFavorite, toggleFavorite],
	);
	const pokemon = data?.pages.flatMap((page) => page.pokemon) ?? [];

	const filteredPokemon = useMemo(() => {
		const query = search.trim().toLowerCase();

		if (!query) {
			return pokemon;
		}

		return pokemon.filter((item) => item.name.toLowerCase().includes(query));
	}, [pokemon, search]);

	if (isLoading) {
		return <HomeLoading />;
	}

	if (isError) {
		return <HomeError error={error} />;
	}

	if (!isLoading && pokemon.length === 0) {
		return <HomeEmpty />;
	}

	const hasSearch = search.trim().length > 0;
	const listData = hasSearch ? filteredPokemon : pokemon;

	return (
		<SafeAreaView style={styles.container} edges={["bottom"]}>
			<View style={styles.btns}>
				<SearchBar value={search} onChangeText={setSearch} />
				<RandomPokemonButton maxPokemonId={MAX_POKEMON_ID} />
			</View>

			<FlatList
				data={listData}
				keyExtractor={(item) => item.id.toString()}
				ref={listRef}
				contentContainerStyle={styles.list}
				renderItem={renderItem}
				onEndReached={() => {
					if (hasNextPage && !isFetchingNextPage) {
						fetchNextPage();
					}
				}}
				onEndReachedThreshold={0.5}
				ListFooterComponent={
					isFetchingNextPage ? (
						<ActivityIndicator style={styles.footerLoader} />
					) : null
				}
				refreshing={isRefetching}
				onRefresh={refetch}
				ListEmptyComponent={hasSearch ? <HomeSearchEmpty /> : null}
				keyboardDismissMode="on-drag"
				keyboardShouldPersistTaps="handled"
			/>
		</SafeAreaView>
	);
}
