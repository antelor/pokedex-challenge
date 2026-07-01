import React from "react";
import { Pressable, Text, View } from "react-native";
import { PokemonListItem } from "../../types/pokemon";
import { formatPokemonId } from "../../utils/format";
import { styles } from "./styles";
import { Image } from "expo-image";

interface Props {
	pokemon: PokemonListItem;
	onPress?: () => void;
}

function PokemonCard({ pokemon, onPress }: Props) {
	return (
		<Pressable style={styles.card} onPress={onPress}>
			<Image
				source={{ uri: pokemon.image }}
				style={styles.image}
				contentFit="contain"
				cachePolicy="memory-disk"
				priority="normal"
				transition={150}
			/>
			<View style={styles.info}>
				<Text style={styles.id}>{formatPokemonId(pokemon.id)}</Text>
				<Text style={styles.name}>{pokemon.name}</Text>
			</View>
		</Pressable>
	);
}

export default React.memo(PokemonCard);
