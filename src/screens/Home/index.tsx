import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useMemo, useState } from "react";
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

export default function Home() {
	const [search, setSearch] = useState("");

	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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

	if (isLoading) {
		return <HomeLoading />;
	}

	if (isError) {
		return <HomeError error={error} />;
	}

	const pokemon = data?.pages.flatMap((page) => page.pokemon) ?? [];

	if (!isLoading && pokemon.length === 0) {
		return <HomeEmpty />;
	}

	const filteredPokemon = useMemo(() => {
		const query = search.trim().toLowerCase();

		if (!query) {
			return pokemon;
		}

		return pokemon.filter((item) => item.name.toLowerCase().includes(query));
	}, [pokemon, search]);

	return (
		<View style={styles.container}>
			<SearchBar value={search} onChangeText={setSearch} />

			<FlatList
				data={search.length === 0 ? pokemon : filteredPokemon}
				keyExtractor={(item) => item.id.toString()}
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
			/>
		</View>
	);
}
