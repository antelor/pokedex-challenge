import { Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";

export default function Types() {
  const pokemon = usePokemonDetail();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Types</Text>

      <View style={styles.row}>
        {pokemon.types.map((type) => (
          <Text key={type.type.name} style={styles.badge}>
            {type.type.name}
          </Text>
        ))}
      </View>
    </View>
  );
}