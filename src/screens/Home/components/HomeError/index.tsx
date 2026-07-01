import { Text, View } from "react-native";
import { styles } from "../../styles";

interface Props {
  error: unknown;
}

export default function HomeError({ error }: Props) {
  return (
    <View style={styles.center}>
      <Text style={styles.errorText}>
        {error instanceof Error
          ? error.message
          : "Something went wrong while loading Pokémon."}
      </Text>
    </View>
  );
}