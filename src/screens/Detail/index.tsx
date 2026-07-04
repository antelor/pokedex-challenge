import { Text, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { usePokemon } from "../../hooks/usePokemon";
import { styles } from "./styles";
import PokemonDetail from "../../components/PokemonDetail";
import DetailLoading from "./components/DetailLoading";
import DetailError from "./components/DetailError";
import Animated, { FadeInDown } from "react-native-reanimated";

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

					<Animated.View entering={FadeInDown.delay(100).duration(300)}>
						<PokemonDetail.Image />
					</Animated.View>

					<Animated.View entering={FadeInDown.delay(200).duration(300)}>
						<PokemonDetail.Types />
					</Animated.View>

					<Animated.View entering={FadeInDown.delay(300).duration(300)}>
						<PokemonDetail.About />
					</Animated.View>

					<Animated.View entering={FadeInDown.delay(400).duration(300)}>
						<PokemonDetail.Description />
					</Animated.View>

					<Animated.View entering={FadeInDown.delay(500).duration(300)}>
						<PokemonDetail.Stats />
					</Animated.View>
				</PokemonDetail>
			</ScrollView>
		</SafeAreaView>
	);
}
