import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";

import { PokemonListItem } from "../../types/pokemon";

import { styles } from "./styles";

interface PokemonCardProps {
  pokemon: PokemonListItem;
  onPress?: () => void;
}

export default function PokemonCard({
  pokemon,
  onPress,
}: PokemonCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={pokemon.image}
        style={styles.image}
        contentFit="contain"
        transition={200}
      />

      <View style={styles.info}>
        <Text style={styles.id}>#{pokemon.id}</Text>

        <Text style={styles.name}>
          {pokemon.name}
        </Text>
      </View>
    </Pressable>
  );
}