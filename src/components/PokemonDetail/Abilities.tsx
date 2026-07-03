import { Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";

export default function Abilities() {
  const pokemon = usePokemonDetail();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Abilities</Text>

      {pokemon.abilities.map((ability) => (
        <Text
          key={ability.ability.name}
          style={styles.textItem}
        >
          {ability.ability.name}
        </Text>
      ))}
    </View>
  );
}