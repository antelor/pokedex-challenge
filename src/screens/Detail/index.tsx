import { Text, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { usePokemon } from "../../hooks/usePokemon";
import { styles } from "./styles";
import PokemonDetail from "../../components/PokemonDetail";
import DetailLoading from "./components/DetailLoading";
import DetailError from "./components/DetailError";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function Detail({ route }: Props) {
	const { id } = route.params;

	const { data, isError, isLoading } = usePokemon(id);

	if (isLoading) {
		return <DetailLoading />;
	}

	if (isError || !data) {
		return <DetailError />;
	}

	return (
		<SafeAreaView style={styles.container} edges={["bottom"]}>
			<ScrollView contentContainerStyle={styles.content}>
				<PokemonDetail pokemon={data}>
					<PokemonDetail.Background />
					<PokemonDetail.Image />
					<PokemonDetail.Types />
					<PokemonDetail.About />
					<PokemonDetail.Description />
					<PokemonDetail.Stats />
				</PokemonDetail>
			</ScrollView>
		</SafeAreaView>
	);
}
