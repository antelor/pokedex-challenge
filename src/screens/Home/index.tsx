import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { usePokemonList } from "../../hooks/usePokemonList";
import { styles } from "./styles";
import PokemonCard from "../../components/PokemonCard";

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

	if (isError) {
		return (
			<SafeAreaView style={styles.center}>
				<Text style={styles.errorText}>
					{error instanceof Error
						? error.message
						: "Something went wrong while loading Pokémon."}
				</Text>
			</SafeAreaView>
		);
	}

	const pokemon = data?.pages.flatMap((page) => page.pokemon) ?? [];

	return (
		<View style={styles.container}>
			<FlatList
				data={pokemon}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.list}
				renderItem={({ item }) => (
					<PokemonCard
						isLoading={isLoading && pokemon.length === 0}
						pokemon={item}
						onPress={() =>
							navigation.navigate("Detail", {
								id: item.id,
							})
						}
					/>
				)}
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
