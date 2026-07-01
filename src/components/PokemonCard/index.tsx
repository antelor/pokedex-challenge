import React from "react";
import { Pressable, Text, View } from "react-native";
import { PokemonListItem } from "../../types/pokemon";
import { formatPokemonId } from "../../utils/format";
import { styles } from "./styles";
import ProgressiveImage from "./components";

interface Props {
  pokemon: PokemonListItem;
  onPress?: () => void;
}

function PokemonCard({ pokemon, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <ProgressiveImage
        lowRes={pokemon.sprite}
        highRes={pokemon.image}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.id}>{formatPokemonId(pokemon.id)}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
      </View>
    </Pressable>
  );
}

export default React.memo(PokemonCard);