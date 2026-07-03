import { Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "../../screens/Detail/styles";

export default function Stats() {
  const pokemon = usePokemonDetail();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Stats</Text>

      {pokemon.stats.map((stat) => (
        <View key={stat.stat.name} style={styles.statRow}>
          <Text style={styles.statName}>
            {stat.stat.name}
          </Text>

          <Text style={styles.statValue}>
            {stat.base_stat}
          </Text>
        </View>
      ))}
    </View>
  );
}