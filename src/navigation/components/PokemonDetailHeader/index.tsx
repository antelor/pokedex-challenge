import { Ionicons } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { usePokemon } from "../../../hooks/usePokemon";
import { formatPokemonId } from "../../../utils/format";
import { styles } from "./styles";

export default function PokemonDetailHeader({
	navigation,
	route,
}: NativeStackHeaderProps) {
	const { id } = route.params as { id: number };

	const { data: pokemon } = usePokemon(id);

	return (
		<View style={[styles.container]}>
			<Pressable onPress={navigation.goBack}>
				<Ionicons name="arrow-back" size={28} color="white" />
			</Pressable>

			<Text style={styles.title}>{pokemon?.name}</Text>

			<Text style={styles.id}>
				{pokemon ? formatPokemonId(pokemon.id) : ""}
			</Text>
		</View>
	);
}
