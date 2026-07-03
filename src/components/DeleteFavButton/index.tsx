import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../../navigation";
import Button from "../Button";
import { Alert } from "react-native";
import { useFavorites } from "../../hooks/useFavorites";

export default function DeleteFavButton() {
	const { clearFavorites } = useFavorites();

	const handlePress = () => {
		Alert.alert(
			"Clear favorites?",
			"This will remove all Pokémon from your favorites.",
			[
				{
					text: "Cancel",
					style: "cancel",
				},
				{
					text: "Clear",
					style: "destructive",
					onPress: clearFavorites,
				},
			],
		);
	};

	return (
		<Button
			title="Clear favorites"
			onPress={handlePress}
		/>
	);
}
