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

  _renderType(){
    var type2;
    if(this.state.pokemon.types[1] != undefined){
      return <Text style={styles.types}>{this.state.pokemon.types[1].type.name}</Text>
    }
  }


  
  render() {
    return (
      <View style={styles.main_container}>
        <Image
          source={{uri:this.state.pokemon.sprites.front_default}}
          style={styles.image}
        />

        <Text>{'# '+ this.state.pokemon.id}</Text>
        
        <Text>{this.state.pokemon.name}</Text>
        <View>
          <Text style={styles.types}>{this.state.pokemon.types[0].type.name}</Text>
          {this._renderType()}
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems:'center',
    paddingTop:100
  },
  image:{
    height:100,
    width:100
  },
  types:{

  }
})

export default PokemonDetails;