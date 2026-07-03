import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import { usePokemonList } from "../../hooks/usePokemonList";
import { RootStackParamList } from "../../navigation";
import { PokemonListItem } from "../../types/pokemon";
import HomeEmpty from "./components/HomeEmpty";
import HomeError from "./components/HomeError";
import HomeLoading from "./components/HomeLoading";
import { styles } from "./styles";
import { useFavorites } from "../../hooks/useFavorites";

export default function Home() {
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

	const renderItem = ({ item }: { item: PokemonListItem }) => (
		<PokemonCard
			pokemon={item}
			onPress={() => navigation.navigate("Detail", { id: item.id })}
			isFavorite={isFavorite(item.id)}
			onToggleFavorite={toggleFavorite}
		/>
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

	return (
		<View style={styles.container}>
			<FlatList
				data={pokemon}
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
