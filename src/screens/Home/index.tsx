import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { usePokemonList } from "../../hooks/usePokemonList";
import { styles } from "./styles";
import PokemonCard from "../../components/PokemonCard";
import { useCallback } from "react";
import { PokemonListItem } from "../../types/pokemon";
import PokemonCardSkeleton from "../../components/PokemonCard/Skeleton";
import HomeError from "./components/HomeError";
import HomeLoading from "./components/HomeLoading";
import HomeEmpty from "./components/HomeEmpty";

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

	const renderItem = useCallback(
		({ item }: { item: PokemonListItem }) => {
			return (
				<PokemonCard
					pokemon={item}
					onPress={() => navigation.navigate("Detail", { id: item.id })}
				/>
			);
		},
		[navigation],
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
