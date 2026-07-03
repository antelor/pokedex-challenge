import { Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { formatStatName, getPokemonTypeColor } from "../../utils/format";
import { styles } from "./styles";

export default function Stats() {
	const pokemon = usePokemonDetail();
	const typeColor = getPokemonTypeColor(pokemon.types[0].type.name);

	return (
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>Stats</Text>
			{pokemon.stats.map((stat) => {
				const value = stat.base_stat;
				const percent = Math.min(value / 255, 1);

				return (
					<View key={stat.stat.name} style={styles.statRow}>
						<Text style={styles.statName}>
							{formatStatName(stat.stat.name)}
						</Text>

						<View
							style={[
								styles.statBarContainer,
								{ backgroundColor: typeColor + "33" },
							]}
						>
							<View
								style={[
									styles.statBarFill,
									{
										width: `${percent * 100}%`,
										backgroundColor: typeColor,
									},
								]}
							/>
						</View>
						<Text style={styles.statValue}>{value}</Text>
					</View>
				);
			})}
		</View>
	);
}
