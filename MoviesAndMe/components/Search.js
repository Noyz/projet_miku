// Components/Search.js

import React from 'react'
import films from '../Helpers/filmsData.js'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText, getImageFromApi } from '../API/TMDBApi.js'

import {TouchableOpacity, StyleSheet, View, TextInput, FlatList, Button, Text, ActivityIndicator  } from 'react-native'


class Search extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			films : [],
			isLoading: false 
		}
		this.searchedText = ""
	}



	_searchTextInputChanged(text){
		this.searchedText = text
	}

	_loadFilms() {
   		if(this.searchedText.length > 0 ){
   			this.setState({ isLoading: true }) // Lancement du chargement
   			getFilmsFromApiWithSearchedText(this.searchedText).then(data => 
   				this.setState({films: data.results, isLoading: false}));
   		}
	}

	_displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
            {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
          </View>
        )
      }
    }
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput 
	        onChangeText={(text) => this._searchTextInputChanged(text) } 
	        style={styles.textinput}  
	        onSubmitEditing={() => this._loadFilms()} 
	        placeholder='Titre du film'
        />
        <TouchableOpacity 
        	style={styles.button}
         	onPress={() => this._loadFilms()}>
	     	<Text style={{color:'#5EB6DD'}}> Rechercher </Text>
    	</TouchableOpacity>
    	<FlatList
          	data={this.state.films}
          	keyExtractor={(item) => item.id.toString()}
  			renderItem={({item}) => <FilmItem film={item}/>}
        />
        {this._displayLoading()}
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
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search