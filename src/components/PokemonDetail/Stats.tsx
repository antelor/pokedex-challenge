import { Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { formatStatName, getPokemonTypeColor } from "../../utils/format";
import { styles } from "./styles";

export default function Stats() {
	const pokemon = usePokemonDetail();
	const typeColor = getPokemonTypeColor(pokemon.types[0].type.name);

	return (
		<View style={styles.section}>
			<Text style={[styles.title, { color: typeColor }]}>Base stats</Text>

			{pokemon.stats.map((stat) => {
				const value = stat.base_stat;
				const percent = Math.min(value / 180, 1);

				return (
					<View key={stat.stat.name} style={styles.statRow}>
						<View style={styles.statInfo}>
							<Text style={styles.statName}>
								{formatStatName(stat.stat.name)}
							</Text>
							<Text style={styles.statValue}>{value}</Text>
						</View>

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
					</View>
				);
			})}
		</View>
	);
}
