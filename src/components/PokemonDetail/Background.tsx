import { View } from "react-native";
import { getPokemonTypeColor } from "../../utils/format";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";

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
		/>
	);
}
