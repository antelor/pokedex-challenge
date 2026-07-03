import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { usePokemon } from "../../../hooks/usePokemon";
import { formatPokemonId, getPokemonTypeColor } from "../../../utils/format";

export default function PokemonDetailHeader({
	navigation,
	route,
}: NativeStackHeaderProps) {
	const { id } = route.params as { id: number };

	const { data: pokemon } = usePokemon(id);

	const backgroundColor = pokemon
		? getPokemonTypeColor(pokemon.types[0].type.name)
		: "#666";

	return (
		<View style={[styles.container, { backgroundColor }]}>
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
