import { Text, View } from "react-native";

import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";
import { getPokemonTypeColor } from "../../utils/format";

export default function Description() {
	const pokemon = usePokemonDetail();
	const typeColor = getPokemonTypeColor(pokemon.types?.[0]?.type?.name);

	if (!pokemon.description) return null;

	return (
		<View style={styles.section}>
			<Text style={[styles.title, { color: typeColor }]}>Description</Text>

			<Text style={styles.description}>{pokemon.description}</Text>
		</View>
	);
}
