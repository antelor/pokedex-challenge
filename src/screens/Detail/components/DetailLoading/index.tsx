import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles";

export default function DetailLoading() {
	return (
		<SafeAreaView style={styles.center}>
			<ActivityIndicator />
		</SafeAreaView>
	);
}
