import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, View } from "react-native";

import PokemonCard from "../../components/PokemonCard";
import { useFavorites } from "../../hooks/useFavorites";
import { styles } from "./styles";
import { RootStackParamList } from "../../navigation";
import FavoritesEmpty from "./components/FavoritesEmpty";

export default function Favorites() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={toggleFavorite}
            onPress={() =>
              navigation.navigate("Detail", {
                id: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
}