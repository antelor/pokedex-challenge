import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { PokemonListItem } from "../../types/pokemon";
import { formatPokemonId } from "../../utils/format";
import FavoriteButton from "../FavoriteButton";
import { styles } from "./styles";
interface Props {
	pokemon: PokemonListItem;
	isFavorite?: boolean;
	onPress?: () => void;
	onToggleFavorite?: (pokemon: PokemonListItem) => void;
}

function PokemonCard({
	pokemon,
	onPress,
	onToggleFavorite,
	isFavorite,
}: Props) {
	return (
		<Pressable style={styles.card} onPress={onPress}>
			<FavoriteButton
				isFavorite={!!isFavorite}
				size={36}
				onPress={() => onToggleFavorite?.(pokemon)}
			/>

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
