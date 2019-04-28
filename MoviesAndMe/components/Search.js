// Components/Search.js

import React from 'react'
import films from '../Helpers/filmsData.js'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi.js'

import {TouchableOpacity, StyleSheet, View, TextInput, FlatList, Button, Text } from 'react-native'


class Search extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			films : [], 
		}
		this.searchedText = ""
	}


	_searchTextInputChanged(text){
		this.searchedText = text
	}

	_loadFilms() {
   		if(this.searchedText.length > 0 ){
   			getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({films: data.results}));
   		}
	}
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput onChangeText={(text) => this._searchTextInputChanged(text) } style={styles.textinput} placeholder='Titre du film'/>
        <TouchableOpacity style={styles.button} onPress={() => this._loadFilms()}>
	     	<Text style={{color:'#5EB6DD'}}> Rechercher </Text>
    	</TouchableOpacity>
    	<FlatList
          	data={this.state.films}
          	keyExtractor={(item) => item.id.toString()}
  			renderItem={({item}) => <FilmItem film={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 40,
    padding: 5
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    paddingLeft: 5,
  },
  button:{
  	alignItems: 'center',
    padding: 10,
    height:40
  }
})

export default Search