import { Text, View, Image, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation";
import { usePokemon } from "../../hooks/usePokemon";
import { styles } from "./styles";
import SkeletonWrapper from "../../components/SkeletonWrapper";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function Detail({ route }: Props) {
	const { id } = route.params;

	const { data, isError, isLoading } = usePokemon(id);

	if (isError || !data) {
		return (
			<SafeAreaView style={styles.center}>
				<Text style={styles.error}>Failed to load Pokémon</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.content}>
				<View style={styles.titleContainer}>
					<SkeletonWrapper isLoading={isLoading}>
						<Text style={styles.title}>
							#{data.id} {data.name}
						</Text>
					</SkeletonWrapper>
				</View>

				<SkeletonWrapper isLoading={isLoading}>
					<Image
						source={{
							uri: data.sprites.other["official-artwork"].front_default,
						}}
						style={styles.image}
					/>
				</SkeletonWrapper>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Types</Text>
					<SkeletonWrapper isLoading={isLoading}>
						<View style={styles.row}>
							{data.types.map((t) => (
								<Text key={t.type.name} style={styles.badge}>
									{t.type.name}
								</Text>
							))}
						</View>
					</SkeletonWrapper>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Abilities</Text>
					<SkeletonWrapper isLoading={isLoading}>
						{data.abilities.map((a) => (
							<Text key={a.ability.name} style={styles.textItem}>
								{a.ability.name}
							</Text>
						))}
					</SkeletonWrapper>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Stats</Text>
					<SkeletonWrapper isLoading={isLoading}>
						{data.stats.map((s) => (
							<View key={s.stat.name} style={styles.statRow}>
								<Text style={styles.statName}>{s.stat.name}</Text>
								<Text style={styles.statValue}>{s.base_stat}</Text>
							</View>
						))}
					</SkeletonWrapper>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
