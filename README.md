# Pokédex Mock Interview

Run: `npm install && npm run dev` (client on :5173, API on :3001).

Task: implement single-Pokémon lookup end to end using PokéAPI
(https://pokeapi.co/api/v2/pokemon/{name}).

1. Implement `GET /api/pokemon/:name` on the server and return our simplified `Pokemon` shape. Handle not-found and upstream errors.
2. Wire up the client so searching shows the result, with loading, error, and not-found states.

Stretch: server-side caching, handling rapid successive searches, clickable suggestions from the initial list.