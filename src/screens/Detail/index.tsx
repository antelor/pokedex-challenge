import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation";
import { usePokemon } from "../../hooks/usePokemon";
import { styles } from "./styles";
import PokemonDetail from "../../components/PokemonDetail";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function Detail({ route }: Props) {
	const { id } = route.params;

	const { data, isError } = usePokemon(id);

	if (isError || !data) {
		return (
			<SafeAreaView style={styles.center}>
				<Text style={styles.error}>Failed to load Pokémon</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container} edges={["bottom"]}>
			<ScrollView contentContainerStyle={styles.content}>
				<PokemonDetail pokemon={data}>
					<PokemonDetail.Background />
					<PokemonDetail.Image />
					<PokemonDetail.Types />
					<PokemonDetail.About />
					<PokemonDetail.Stats />
				</PokemonDetail>
			</ScrollView>
		</SafeAreaView>
	);
}
