// Components/Search.js

import React from 'react'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText, getImageFromApi } from '../API/TMDBApi.js'

import {TouchableOpacity, StyleSheet, View, TextInput, FlatList, Button, Text, ActivityIndicator  } from 'react-native'


class Search extends React.Component {
	constructor(props){
		super(props)
		this.searchedText = ""
		this.page = 0
		this.totalPages = 0
		this.state = {
			films : [],
			isLoading: false 
		}
	}

	_loadFilms() {
   		if(this.searchedText.length > 0 ){
   			this.setState({ isLoading: true }) 
   			getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
	          this.page = data.page
	          this.totalPages = data.total_pages
	          this.setState({
	            films: [ ...this.state.films, ...data.results ],
	            isLoading: false
	          })
	      })
   		}
	}

	_searchTextInputChanged(text){
		this.searchedText = text
	}

	_searchFilms (){
		this.page = 0
		this.totalPages = 0
		this.setState({
			films: []
		}, () => {
			this._loadFilms()
		})
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
	        onSubmitEditing={() => this._searchFilms()} 
	        placeholder='Titre du film'
        />
        <TouchableOpacity 
        	style={styles.button}
         	onPress={() => this._loadFilms()}>
	     	<Text style={{color:'#5EB6DD'}}> Recheessssrcher </Text>
    	</TouchableOpacity>
    	<FlatList
          	data={this.state.films}
  			keyExtractor={(item) => item.id.toString()}
  			renderItem={({item}) => <FilmItem film={item}/>}
  			onEndReachedThreshold={0.5}
		    onEndReached={() => {
		    if (this.page < this.totalPages) { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
		        this._loadFilms()
		      }
		    }}
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