import { Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";
import { getPokemonTypeColor } from "../../utils/format";

export default function Types() {
  const pokemon = usePokemonDetail();

  return (
    <View style={styles.section}>
      <View style={styles.row}>
        {pokemon.types.map((type) => (
          <Text key={type.type.name} style={[styles.badge, { backgroundColor: getPokemonTypeColor(type.type.name) }]}>
            {type.type.name}
          </Text>
        ))}
      </View>
    </View>
  );
}