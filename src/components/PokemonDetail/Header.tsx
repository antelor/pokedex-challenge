import { Image, Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";
import FavoriteButton from "../FavoriteButton";
import { convertToListItem } from "../../utils/format";
import { useFavorites } from "../../hooks/useFavorites";

export default function Header() {
	const pokemon = usePokemonDetail();
	const { isFavorite, toggleFavorite } = useFavorites();

	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>
					#{pokemon.id} {pokemon.name}
				</Text>
				<FavoriteButton
					isFavorite={!!isFavorite(pokemon.id)}
					size={36}
					onPress={() => toggleFavorite?.(convertToListItem(pokemon))}
				/>
			</View>

			<Image
				source={{
					uri: pokemon.sprites.other["official-artwork"].front_default,
				}}
				style={styles.image}
			/>
		</>
	);
}
