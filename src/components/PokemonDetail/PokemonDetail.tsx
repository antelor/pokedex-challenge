import { PropsWithChildren } from "react";
import { Pokemon } from "../../types/pokemon";
import PokemonDetailContext from "./PokemonDetailContext";

interface Props extends PropsWithChildren {
  pokemon: Pokemon;
}

export default function PokemonDetail({
  pokemon,
  children,
}: Props) {
  return (
    <PokemonDetailContext.Provider value={pokemon}>
      {children}
    </PokemonDetailContext.Provider>
  );
}