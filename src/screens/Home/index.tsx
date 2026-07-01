import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { usePokemonList } from "../../hooks/usePokemonList";

import { styles } from "./styles";

export default function Home() {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
	} = usePokemonList();

	const pokemon = data?.pages.flatMap((page) => page.pokemon) ?? [];

	if (isLoading) {
		return (
			<SafeAreaView style={styles.center}>
				<ActivityIndicator size="large" />
			</SafeAreaView>
		);
	}

	if (isError) {
		return (
			<SafeAreaView style={styles.center}>
				<Text>Something went wrong while loading Pokémon.</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={pokemon}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text style={styles.name}>{item.name}</Text>
					</View>
				)}
				onEndReached={() => {
					if (hasNextPage) {
						fetchNextPage();
					}
				}}
				onEndReachedThreshold={0.5}
				ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
			/>
		</SafeAreaView>
	);
}
