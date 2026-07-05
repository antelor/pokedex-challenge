import { Image } from "expo-image";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";

export default function Header() {
	const pokemon = usePokemonDetail();

	const imageUri = pokemon.sprites?.other?.["official-artwork"]?.front_default;

	return (
		<>
			<Image
				source={
					imageUri ? { uri: imageUri } : require("../../assets/placeholder.png")
				}
				style={styles.image}
				contentFit="contain"
				transition={{
					duration: 300,
					effect: "cross-dissolve",
				}}
				testID="pokemon-image"
			/>
		</>
	);
}
