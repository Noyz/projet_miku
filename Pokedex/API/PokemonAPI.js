// Get Pokemon From Database

export function getPokemonFromDataBase () {
	return fetch('https://github.com/Noyz/projet_miku/blob/master/Pokedex/db/items.json')
	.then((response) => response.json())
	.then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.log(error);
    });
}