import { Image, Text, View } from "react-native";
import { usePokemonDetail } from "./PokemonDetailContext";
import { styles } from "./styles";

export default function Header() {
  const pokemon = usePokemonDetail();

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          #{pokemon.id} {pokemon.name}
        </Text>
      </View>

      <Image
        source={{
          uri: pokemon.sprites.other["official-artwork"].front_default,
        }}
        style={styles.image}
      />
    </>
  );
}