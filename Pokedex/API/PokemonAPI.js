// Get Pokemon From Database

export function getPokemonFromDataBase () {
	return fetch('../db/pokedex.js')
	.then((response) => response.json())
	.then((responseJson) => {
      return responseJson.pokemons;
    })
    .catch((error) => {
      console.error(error);
    });
}