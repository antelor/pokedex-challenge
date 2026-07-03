import { View, Text } from "react-native";
import { styles } from "./styles";

export default function FavoritesEmpty() {
	return (
		<View style={styles.emptyContainer}>
			<Text style={styles.emptyTitle}>No favorites yet</Text>
			<Text style={styles.emptySubtitle}>
				Tap the heart on a Pokémon to add it here.
			</Text>
		</View>
	);
}
