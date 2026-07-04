import { View } from "react-native";
import { getPokemonTypeColor } from "../../utils/format";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";
import { Image } from "expo-image";

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
				transition={{
					duration: 300,
					effect: "cross-dissolve",
				}}
			/>
		</View>
	);
}
