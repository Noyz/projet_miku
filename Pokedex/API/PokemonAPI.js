// Get Pokemon From Database

export function getPokemonFromDataBase (text) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + text.id
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
        return data;
      })
      .catch(err => console.log(err));
  
}