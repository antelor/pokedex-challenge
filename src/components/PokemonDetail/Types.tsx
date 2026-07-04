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

	return (
		<View style={styles.typeContainer}>
			<View style={styles.row}>
				{pokemon.types.map((type) => (
					<View
						style={[
							styles.badgeContainer,
							{ backgroundColor: getPokemonTypeColor(type.type.name) },
						]}
						key={type.type.name}
					>
						<Text key={type.type.name} style={styles.badge}>
							{type.type.name}
						</Text>
					</View>
				))}
			</View>
			<Pressable onPress={handleToggleFavorite} style={styles.favContainer}>
				<Text>
					{isFavorite(pokemon.id) ? "Remove from" : "Add to"} favorites
				</Text>
				<FavoriteIcon isFavorite={!!isFavorite(pokemon.id)} size={24} />
			</Pressable>
		</View>
	);
}
