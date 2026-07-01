import { useInfiniteQuery } from "@tanstack/react-query";

import { getPokemonPage, PAGE_SIZE } from "../api/api";

export function usePokemonList() {
  return useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: ({ pageParam }) => getPokemonPage(pageParam),
    initialPageParam: 0,

    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage.next) return undefined;

      return lastPageParam + PAGE_SIZE;
    },
  });
}