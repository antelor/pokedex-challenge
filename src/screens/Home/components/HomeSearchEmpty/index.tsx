import { Text, View } from "react-native";
import { styles } from "../../styles";

export default function HomeEmpty() {
    return (
        <View style={styles.center}>
            <View>
                <Text style={styles.emptyTitle}>No matching results</Text>
                <Text style={styles.emptySubtitle}>Try searching another name.</Text>
            </View>
        </View>
    );
}
