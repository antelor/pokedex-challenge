import { Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";
import { formatName, getPokemonTypeColor } from "../../utils/format";

export default function About() {
	const pokemon = usePokemonDetail();
	const height = `${pokemon.height / 10} m`;
	const weight = `${pokemon.weight / 10} kg`;
	const abilities = pokemon.abilities ?? [];
	const typeColor = getPokemonTypeColor(pokemon.types?.[0]?.type?.name);

	return (
		<View style={styles.section}>
			<Text style={[styles.title, { color: typeColor }]}>About</Text>

			<View style={styles.row}>
				<View style={styles.column}>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{weight}</Text>
					</View>
					<Text style={styles.label}>Weight</Text>
				</View>

				<View style={styles.divider} />

				<View style={styles.column}>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{height}</Text>
					</View>
					<Text style={styles.label}>Height</Text>
				</View>

				<View style={styles.divider} />

				<View style={styles.column}>
					<View style={styles.valueContainer}>
						{abilities.map(({ ability }) => (
							<Text
								key={ability.name}
								style={styles.value}
								numberOfLines={1}
								adjustsFontSizeToFit
								minimumFontScale={0.7}
							>
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
