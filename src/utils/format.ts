import { Pokemon, PokemonListItem } from "../types/pokemon";

const POKEMON_TYPE_COLORS = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
} as const;

const STAT_ABBREVIATIONS: Record<string, string> = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SPA",
  "special-defense": "SPD",
  speed: "SPE",
};

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

export function getPokemonTypeColor(type: string) {
  return (
    POKEMON_TYPE_COLORS[
      type as keyof typeof POKEMON_TYPE_COLORS
    ] ?? "#777777"
  );
}

export function formatStatName(name: string) {
  return STAT_ABBREVIATIONS[name] ?? name.toUpperCase();
}

export function formatName(name: string) {
  return name
    .split("-")
    .map(
      word => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}