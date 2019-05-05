// Get Pokemon From Database

export function getPokemonFromDataBase () {
	return fetch('localhost:5000/pokedex(1)', {
		method: 'POST',
		headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
	.then((response) => response.json())
	.then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.log(error);
    });
}