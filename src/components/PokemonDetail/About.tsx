import { Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";
import { formatName, getPokemonTypeColor } from "../../utils/format";

export default function About() {
	const pokemon = usePokemonDetail();
	const height = pokemon.height / 10;
	const weight = pokemon.weight / 10;
  const typeColor = getPokemonTypeColor(pokemon.types[0].type.name);

	return (
		<View style={styles.section}>
			<Text style={[styles.title, { color: typeColor }]}>About</Text>

			<View style={styles.row}>
				<View style={styles.column}>
            <View style={styles.valueContainer}>

					<Text style={styles.value}>{weight} kg</Text>
          </View>
					<Text style={styles.label}>Weight</Text>
				</View>

				<View style={styles.divider} />

				<View style={styles.column}>
            <View style={styles.valueContainer}>

					<Text style={styles.value}>{height} m</Text>
           </View>
					<Text style={styles.label}>Height</Text>
				</View>

				<View style={styles.divider} />

				<View style={styles.column}>
            <View style={styles.valueContainer}>

					{pokemon.abilities.map(({ ability }) => (
						<Text key={ability.name} style={styles.value}>
							{formatName(ability.name)}
						</Text>
					))}
           </View>
					<Text style={styles.label}>Moves</Text>
				</View>
			</View>
		</View>
	);
}
