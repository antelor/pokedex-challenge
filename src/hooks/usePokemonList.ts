import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../api/api";

const PAGE_SIZE = 20;

const fetchPokemon = async ({ pageParam = 0 }) => {
  const response = await api.get("/pokemon", {
    params: {
      limit: PAGE_SIZE,
      offset: pageParam,
    },
  });

  return response.data;
};

export function usePokemonList() {
  return useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,

    initialPageParam: 0,

    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage.next) return undefined;

      return lastPageParam + PAGE_SIZE;
    },
  });
}