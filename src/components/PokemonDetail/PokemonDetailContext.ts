import { createContext, useContext } from "react";
import { Pokemon } from "../../types/pokemon";

const PokemonDetailContext = createContext<Pokemon | null>(null);

export function usePokemonDetail() {
  const context = useContext(PokemonDetailContext);

  if (!context) {
    throw new Error(
      "PokemonDetail compound components must be used within PokemonDetail."
    );
  }

  return context;
}

export default PokemonDetailContext;