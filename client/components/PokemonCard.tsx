import type { Pokemon } from "../../shared/types";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, width: 220 }}>
      {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.name} />}
      <h3>#{pokemon.id} {pokemon.name}</h3>
      <p>Types: {pokemon.types.join(", ")}</p>
      <p>Height: {pokemon.height} | Weight: {pokemon.weight}</p>
    </div>
  );
}