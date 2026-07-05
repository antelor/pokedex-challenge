import { Pressable, Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";
import { convertToListItem, getPokemonTypeColor } from "../../utils/format";
import FavoriteIcon from "../FavoriteIcon";
import { useFavorites } from "../../hooks/useFavorites";

export default function Types() {
	const pokemon = usePokemonDetail();
	const { isFavorite, toggleFavorite } = useFavorites();
	const handleToggleFavorite = () =>
		toggleFavorite?.(convertToListItem(pokemon));

	const favorite = isFavorite(pokemon.id);

	if (!pokemon.types) return null;

	return (
		<View style={styles.typeContainer}>
			<View style={styles.row}>
				{pokemon.types?.map((type) => (
					<View
						style={[
							styles.badgeContainer,
							{ backgroundColor: getPokemonTypeColor(type?.type?.name) },
						]}
						key={type?.type?.name}
					>
						<Text style={styles.badge}>{type?.type?.name}</Text>
					</View>
				))}
			</View>
			<Pressable onPress={handleToggleFavorite} style={styles.favContainer}>
				<Text>{favorite ? "Remove from" : "Add to"} favorites</Text>
				<FavoriteIcon isFavorite={favorite} size={24} />
			</Pressable>
		</View>
	);
}
