import {
	createContext,
	PropsWithChildren,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";

import { getFavorites, saveFavorites } from "../services/favorites";
import { PokemonListItem } from "../types/pokemon";
import { FavoritesContextValue } from "../types/favorites";

export const FavoritesContext = createContext<FavoritesContextValue | null>(
	null,
);

export function FavoritesProvider({ children }: PropsWithChildren) {
	const [favorites, setFavorites] = useState<PokemonListItem[]>([]);

	useEffect(() => {
		getFavorites().then(setFavorites);
	}, []);

	const isFavorite = useCallback(
		(id: number) => favorites.some((pokemon) => pokemon.id === id),
		[favorites],
	);

	const toggleFavorite = useCallback(
		async (pokemon: PokemonListItem) => {
			const updated = favorites.some((item) => item.id === pokemon.id)
				? favorites.filter((item) => item.id !== pokemon.id)
				: [...favorites, pokemon];

			setFavorites(updated);
			await saveFavorites(updated);
		},
		[favorites],
	);
	const value = useMemo(
		() => ({
			favorites,
			isFavorite,
			toggleFavorite,
		}),
		[favorites, isFavorite, toggleFavorite],
	);

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
}
