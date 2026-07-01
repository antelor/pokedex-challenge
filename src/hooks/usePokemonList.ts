import { useEffect } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

import { getPokemonPage, PAGE_SIZE } from "../api/api";

export function usePokemonList() {
  const queryClient = useQueryClient();

  const query = useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: ({ pageParam }) => getPokemonPage(pageParam),
    initialPageParam: 0,

    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage.next) return undefined;
      return lastPageParam + PAGE_SIZE;
    },
  });

  useEffect(() => {
    const pages = query.data?.pages;
    if (!pages || pages.length === 0) return;

    const nextOffset = pages.length * PAGE_SIZE;

    queryClient.prefetchQuery({
      queryKey: ["pokemon", nextOffset],
      queryFn: () => getPokemonPage(nextOffset),
    });
  }, [query.data, queryClient]);

  return query;
}