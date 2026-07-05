import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../../navigation";
import Button from "../Button";

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
		<Button
			title="Random"
			onPress={handlePress}
			icon={<Ionicons name="shuffle" size={20} color="#ef5350" />}
			testID='random-button'
		/>
	);
}
