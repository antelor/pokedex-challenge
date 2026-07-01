import { useQuery } from "@tanstack/react-query";

import { getPokemon } from "../api/api";

export function usePokemon(id: number) {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
    enabled: !!id,
  });
}