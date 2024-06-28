import { FetchAdapter } from "./http-request";
import PokemonGateway from "./pokemon-gateway";

test('Realizar uma requisição "GET" utilizando fetch', async () => {
  const fetchAdapter = new FetchAdapter();

  const pokemonGateway = new PokemonGateway(fetchAdapter);

  const response = await pokemonGateway.getPokemonByName("bulbasaur");

  expect(response.name).toBe("bulbasaur");
});
