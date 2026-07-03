import { Image } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";

export default function Header() {
	const pokemon = usePokemonDetail();

	return (
		<>
			<Image
				source={{
					uri: pokemon.sprites.other["official-artwork"].front_default,
				}}
				style={styles.image}
			/>
		</>
	);
}
