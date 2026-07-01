import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";

import SkeletonWrapper from "../SkeletonWrapper";
import { PokemonListItem } from "../../types/pokemon";
import { formatPokemonId } from "../../utils/format";

import { styles } from "./styles";
import ProgressiveImage from "./components";

interface Props {
	pokemon?: PokemonListItem;
	isLoading?: boolean;
	onPress?: () => void;
}

export default function PokemonCard({
	pokemon,
	isLoading = false,
	onPress,
}: Props) {
	return (
		<Pressable style={styles.card} onPress={onPress} disabled={isLoading}>
			<SkeletonWrapper isLoading={isLoading}>
				<ProgressiveImage
					lowRes={pokemon?.sprite}
					highRes={pokemon?.image}
					style={styles.image}
				/>
			</SkeletonWrapper>

			<View style={styles.info}>
				<SkeletonWrapper isLoading={isLoading}>
					<Text style={styles.id}>{formatPokemonId(pokemon!.id)}</Text>
				</SkeletonWrapper>

				<SkeletonWrapper isLoading={isLoading}>
					<Text style={styles.name}>{pokemon!.name}</Text>
				</SkeletonWrapper>
			</View>
		</Pressable>
	);
}
