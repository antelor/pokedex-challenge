import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert, FlatList, Pressable, View, Text } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import { useFavorites } from "../../hooks/useFavorites";
import { styles } from "./styles";
import { RootStackParamList } from "../../navigation";
import FavoritesEmpty from "./components/FavoritesEmpty";
import Button from "../../components/Button";
import DeleteFavButton from "../../components/DeleteFavButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favorites() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const { favorites, isFavorite, toggleFavorite } =
		useFavorites();


	if (favorites.length === 0) {
		return <FavoritesEmpty />;
	}

	return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
			<FlatList
				data={favorites}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.list}
				ListHeaderComponent={
					<View style={styles.header}>
            <DeleteFavButton />
          </View>
				}
				renderItem={({ item }) => (
					<PokemonCard
						pokemon={item}
						isFavorite={isFavorite(item.id)}
						onToggleFavorite={toggleFavorite}
						onPress={() =>
							navigation.navigate("Detail", {
								id: item.id,
							})
						}
					/>
				)}
			/>
		</SafeAreaView>
	);
}
