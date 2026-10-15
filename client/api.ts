import type { Pokemon } from "../shared/types";

export async function fetchPokemonList(): Promise<string[]> {
  const res = await fetch("/api/pokemon");
  return res.json();
}

// TODO: call the single-pokemon endpoint and return a Pokemon.
export async function fetchPokemon(name: string): Promise<Pokemon> {
  throw new Error("Not implemented");
}