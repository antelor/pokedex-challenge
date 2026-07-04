import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { PokemonListItem } from "../../types/pokemon";
import { formatPokemonId } from "../../utils/format";
import FavoriteIcon from "../FavoriteIcon";
import { styles } from "./styles";
interface Props {
	pokemon: PokemonListItem;
	isFavorite?: boolean;
	onPress: (id: number) => void;
	onToggleFavorite?: (pokemon: PokemonListItem) => void;
}

function PokemonCard({
	pokemon,
	onPress,
	onToggleFavorite,
	isFavorite,
}: Props) {
	return (
		<Pressable style={styles.card} onPress={() => onPress(pokemon.id)}>
			<View style={styles.infoContainer}>
				<Image
					source={{ uri: pokemon.image }}
					style={styles.image}
					contentFit="contain"
					cachePolicy="memory-disk"
					priority="normal"
					transition={{
						duration: 300,
						effect: "cross-dissolve",
					}}
					placeholder={require("../../assets/placeholder.png")}
					placeholderContentFit="contain" 
				/>
				<View style={styles.info}>
					<Text style={styles.id}>{formatPokemonId(pokemon.id)}</Text>
					<Text style={styles.name}>{pokemon.name}</Text>
				</View>
			</View>
			<FavoriteIcon
				isFavorite={!!isFavorite}
				size={36}
				onPress={() => onToggleFavorite?.(pokemon)}
			/>
		</Pressable>
	);
}

export default React.memo(PokemonCard);
