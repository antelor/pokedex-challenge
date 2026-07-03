export interface PokemonListItem {
  id: number;
  name: string;
  image: string;
}

export interface PokemonListResponse {
  pokemon: PokemonListItem[];
  next: string | null;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;

  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };

  types: PokemonType[];

  stats: PokemonStat[];

  abilities: PokemonAbility[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}