import { Pokemon, PokemonListItem } from "../types/pokemon";

export function formatPokemonId(id: number) {
  return `#${id.toString().padStart(3, "0")}`;
}

export function convertToListItem(pokemon: Pokemon): PokemonListItem {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
  };
}
