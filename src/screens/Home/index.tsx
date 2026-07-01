import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

import { usePokemonList } from "../../hooks/usePokemonList";

import { styles } from "./styles";

export default function Home() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePokemonList();

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
        <Text style={styles.errorText}>
          {error instanceof Error
            ? error.message
            : "Something went wrong while loading Pokémon."}
        </Text>
      </SafeAreaView>
    );
  }

  const pokemon = data?.pages.flatMap((page) => page.pokemon) ?? [];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              contentFit="contain"
              transition={200}
            />

            <View style={styles.info}>
              <Text style={styles.id}>#{item.id}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </View>
        )}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator style={styles.footerLoader} />
          ) : null
        }
      />
    </SafeAreaView>
  );
}