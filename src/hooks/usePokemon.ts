import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../services/pokemon";

export function usePokemon(id: number) {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
    enabled: !!id,
  });
}