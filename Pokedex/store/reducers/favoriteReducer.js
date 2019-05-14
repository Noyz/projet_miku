const initialState = {favoritesPokemon :  [] }

function toggleFavorite (state = initialState, action){
	let nextState
	switch(action.type) {
		case "TOOGLE_FAVORITE":
			const favoritePokemon = state.favoritesPokemon.findIndex(item => item.id === action.value.id)
			if(favoritePokemon !== -1){
				nextState = {
		          ...state,
		          favoritesPokemon: state.favoritesPokemon.filter( (item, index) => index !== favoritePokemonIndex)
		        }
			}
			else {
		        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
		        nextState = {
		          ...state,
		          favoritesPokemon: [...state.favoritesPokemon, action.value]
		        }
		    }
		    return nextState || state
		default: 
			return state
	}
}

export default toggleFavorite