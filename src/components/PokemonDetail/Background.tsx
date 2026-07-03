import { View } from "react-native";
import { getPokemonTypeColor } from "../../utils/format";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";
import { Image } from "react-native";

export default function Background() {
	const pokemon = usePokemonDetail();
	const typeColor = getPokemonTypeColor(pokemon.types[0].type.name);

	return (
		<View
			style={[
				styles.heroBackground,
				{
					backgroundColor: typeColor,
				},
			]}
		>
			<Image
				source={require("../../assets/pokeball.png")}
				style={styles.pokeball}
			/>
		</View>
	);
}
