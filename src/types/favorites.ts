import { PokemonListItem } from "./pokemon";

export interface FavoritesContextValue {
    favorites: PokemonListItem[];
    isFavorite: (id: number) => boolean;
    toggleFavorite: (pokemon: PokemonListItem) => Promise<void>;
}
