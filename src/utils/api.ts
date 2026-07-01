export function getPokemonId(url: string): number {
  const match = url.match(/\/pokemon\/(\d+)\//);

  if (!match) {
    throw new Error("Invalid Pokémon URL");
  }

  return Number(match[1]);
}