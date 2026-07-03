import AsyncStorage from "@react-native-async-storage/async-storage";
import { PokemonListItem } from "../types/pokemon";

const FAVORITES_KEY = "favorites";

export async function getFavorites(): Promise<PokemonListItem[]> {
  const value = await AsyncStorage.getItem(FAVORITES_KEY);

  return value ? JSON.parse(value) : [];
}

export async function saveFavorites(favorites: PokemonListItem[]) {
  await AsyncStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites)
  );
}