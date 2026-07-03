import React from "react";
import { Pressable, Text, View } from "react-native";
import { PokemonListItem } from "../../types/pokemon";
import { formatPokemonId } from "../../utils/format";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
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
			<Pressable
				style={styles.favoriteButton}
				onPress={(e) => {
					e.stopPropagation();
					console.log(pokemon)
					onToggleFavorite?.(pokemon);
				}}
				hitSlop={10}
			>
				<Ionicons
					name={isFavorite ? "heart" : "heart-outline"}
					size={36}
					color={isFavorite ? "#ef4444" : "#9ca3af"}
				/>
			</Pressable>

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
