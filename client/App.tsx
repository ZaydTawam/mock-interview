import { useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import { fetchPokemon } from "./api";

export default function App() {
  const [result, setResult] = useState<any>(null);

  // TODO: wire SearchBar to fetchPokemon and render PokemonCard.
  // Show loading, error, and empty states.
  const handleSearch = (name: string) => {
    console.log("search:", name);
  };

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Pokédex</h1>
      <SearchBar onSearch={handleSearch} />
      {result && <PokemonCard pokemon={result} />}
    </div>
  );
}