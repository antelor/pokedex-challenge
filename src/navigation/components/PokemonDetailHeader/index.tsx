import { Ionicons } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { usePokemon } from "../../../hooks/usePokemon";
import { formatPokemonId } from "../../../utils/format";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PokemonDetailHeader({
	navigation,
	route,
}: NativeStackHeaderProps) {
	const { id } = route.params as { id: number };
	const insets = useSafeAreaInsets();
	const { data: pokemon, isLoading } = usePokemon(id);

	if (isLoading) return null;

	return (
		<View style={[styles.container, { paddingTop: insets.top }]}>
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
