import { FlatList, View } from "react-native";
import { styles } from "../../styles";
import PokemonCardSkeleton from "../../../../components/PokemonCard/Skeleton";

export default function HomeLoading() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Array.from({ length: 12 })}
        keyExtractor={(_, i) => String(i)}
        renderItem={() => <PokemonCardSkeleton />}
      />
    </View>
  );
}