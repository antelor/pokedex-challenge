import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
	maxPokemonId: number;
}

export default function RandomPokemonButton({ maxPokemonId }: Props) {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const handlePress = () => {
		const id = Math.floor(Math.random() * maxPokemonId) + 1;

		navigation.navigate("Detail", { id });
	};

	return (
		<Pressable
			onPress={handlePress}
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
		>
			<Text style={styles.text}>Random</Text>
			<Ionicons name="shuffle" size={20} color="#ef5350" />
		</Pressable>
	);
}
