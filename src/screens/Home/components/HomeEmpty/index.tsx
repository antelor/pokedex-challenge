import { Text, View } from "react-native";
import { styles } from "../../styles";

export default function HomeEmpty() {
  return (
    <View style={styles.center}>
      <View>
        <Text style={styles.emptyTitle}>No Pokémon found</Text>
        <Text style={styles.emptySubtitle}>
          Try refreshing the list or check your connection.
        </Text>
      </View>
    </View>
  );
}