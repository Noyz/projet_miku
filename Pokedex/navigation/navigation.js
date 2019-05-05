// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../components/search.js'
import PokemonDetails from '../components/pokemonDetails.js'


const SearchStackNavigator = createStackNavigator({
  Search: { 
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  PokemonDetails: {
    screen: PokemonDetails,
    navigationOptions: {
      title: "Details"
    }

  }
})

export default createAppContainer(SearchStackNavigator)