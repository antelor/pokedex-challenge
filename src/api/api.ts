import axios from "axios";

import {
  Pokemon,
  PokemonListItem,
  PokemonListResponse,
} from "../types/pokemon";
import { getPokemonId } from "../utils/api";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000,
});

export const PAGE_SIZE = 20;

export async function getPokemonPage(
  offset: number
): Promise<PokemonListResponse> {
  const { data } = await api.get("/pokemon", {
    params: {
      limit: PAGE_SIZE,
      offset,
    },
  });

  const pokemon: PokemonListItem[] = data.results.map(
    (item: { name: string; url: string }) => {
      const id = getPokemonId(item.url);

      return {
        id,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    }
  );

  return {
    pokemon,
    next: data.next,
  };
}

export async function getPokemon(id: number): Promise<Pokemon> {
  const { data } = await api.get<Pokemon>(`/pokemon/${id}`);

  return data;
}