import express from "express";
import type { Pokemon } from "../shared/types";

const app = express();
const POKEAPI = "https://pokeapi.co/api/v2";

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

// Already implemented: returns the first 20 pokemon names.
app.get("/api/pokemon", async (_req, res) => {
  const r = await fetch(`${POKEAPI}/pokemon?limit=20`);
  const data: any = await r.json();
  res.json(data.results.map((p: any) => p.name));
});

// TODO: Fetch a single pokemon from PokeAPI and return it as a `Pokemon`
// (see shared/types.ts). Handle not-found and upstream failures sensibly.
app.get("/api/pokemon/:name", async (req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

app.listen(3001, () => console.log("API on http://localhost:3001"));