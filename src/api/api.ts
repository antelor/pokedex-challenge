import axios from "axios";

import { PokemonListResponse, Pokemon } from "../types/pokemon";

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

  const pokemon = await Promise.all(
    data.results.map(async (item: { url: string }) => {
      const { data: details } = await api.get<Pokemon>(item.url);

      return details;
    })
  );

  return {
    pokemon,
    next: data.next,
  };
}