import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

interface Props {
	isFavorite: boolean;
	onPress: () => void;
	size?: number;
}

export default function FavoriteButton({
	isFavorite,
	onPress,
	size = 28,
}: Props) {
	return (
		<Pressable
			style={styles.container}
			hitSlop={10}
			onPress={(e) => {
				e.stopPropagation();
				onPress();
			}}
		>
			<Ionicons
				name={isFavorite ? "heart" : "heart-outline"}
				size={size}
				color={isFavorite ? "#ef4444" : "#9ca3af"}
			/>
		</Pressable>
	);
}
