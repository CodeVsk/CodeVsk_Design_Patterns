import HttpRequest from "./http-request";

export default class PokemonGateway {
  constructor(readonly httpRequest: HttpRequest) {}

  async getPokemonByName(name: string): Promise<any> {
    const response = await this.httpRequest.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    return response;
  }
}
