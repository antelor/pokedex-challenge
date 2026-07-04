import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles";

interface Props {
	message?: string;
}

export default function DetailError({ message }: Props) {
	return (
		<SafeAreaView style={styles.center}>
			<Text style={styles.error}>Failed to load Pokémon.</Text>

			{message ? <Text style={styles.error}>{message}</Text> : null}
		</SafeAreaView>
	);
}
