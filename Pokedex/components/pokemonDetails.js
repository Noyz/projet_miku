// Components/PokemonDetail.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


class PokemonDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon:this.props.navigation.state.params.pokemon
    }
  }

  render() {
    console.log(this.state.pokemon)
    return (
      <View style={styles.main_container}>
      <Image
        source={{uri:this.state.pokemon.sprites.front_default}}
        style={{height:50, width:50}}
      />
      <Text>{'# '+ this.state.pokemon.id}</Text>
        <Text>{this.state.pokemon.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default PokemonDetails;