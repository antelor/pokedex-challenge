import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { usePokemonList } from "../../hooks/usePokemonList";

import { styles } from "./styles";

export default function Home() {
  const { data, isLoading, isError, error } = usePokemonList();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>{error.message}</Text>
      </SafeAreaView>
    );
  }

  const pokemon = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}