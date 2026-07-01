import { View } from "react-native";
import { styles } from "./styles";

export default function PokemonCardSkeleton() {
	return (
		<View style={styles.card}>
			<View style={styles.imageSkeleton} />
			<View style={styles.info}>
				<View style={styles.textSkeleton} />
				<View style={styles.textSkeletonSmall} />
			</View>
		</View>
	);
}
