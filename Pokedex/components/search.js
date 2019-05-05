import React from 'react'
import PokemonItems from './pokemonItems.js'
import pokemons from '../db/pokedex.js'
import { getPokemonFromDataBase } from '../API/PokemonAPI.js'

import {Text, TextInput, View, StyleSheet, Button, Picker, FlatList, SectionList, TouchableOpacity} from 'react-native'

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			pokemons:[],
			text:[],
			number:[],
			firstType:[],
			secondType:[],
			pokemonDetail:[]
		}
	}

  	_displayPokemonDetail = (idPokemon) => {
  		getPokemonFromDataBase(idPokemon).then(data => 
  			this.props.navigation.navigate('PokemonDetails', { pokemon: data })
  		);
 
    	
  	}

	_loadPokemonsFromSearchText(text){
		var pkmnarray = [];
		var str1 = RegExp(text);
		pokemons.forEach(function(element) {
  			if(str1.test(element.name.english)){
  				pkmnarray.push(element);
  			}
		});
		text.length > 0 ? this.setState({pokemons:pkmnarray}) : this.setState({pokemons:[]}) 
		
	}

	_loadPokemonsFromNumber(number){
		var pkmnarray = [];
		pokemons.forEach(function(element) {
  			if(number == element.id){
  				pkmnarray.push(element);
  			}
		});
		this.setState({pokemons:pkmnarray})
		
	}
	_loadPokemonsFromSelectedFirstType(option){
		var pkmnarray = [];
		pokemons.forEach(function(element){
			if(option == element.type[0]){
				pkmnarray.push(element);
			}
		});

		this.setState({pokemons:pkmnarray})
	}

	_loadPokemonsFromSelectedSecondType(option){
		var pkmnarray = [];
		pokemons.forEach(function(element){
			if(element.type[1] !== "undefined"){
				if(option == element.type[1]){
					pkmnarray.push(element);
				}
			}
		});
		this.setState({pokemons:pkmnarray})
	}

	render(){
		const { pokemon, displayPokemonDetail} = this.props

		return(
			<View>
				<View style = {styles.search_container} >
					<View style = {styles.searchInputs_container}>
						<View style = {{flexDirection:'row'}}>
							<TextInput 
					        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
					        style = {[styles.textInputs, {flex:2}]}
					        editable = {true}
					        maxLength = {40}
					        placeholder = "Name"
					        onChangeText={(text) =>  {this._loadPokemonsFromSearchText(text)}}
					        onSubmitEditing={() => { this._loadPokemonsFromSearchText(this.state.text) }}
					      />
					      <TextInput 
					        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
					        style = {[styles.textInputs, {flex:1}]}
					        editable = {true}
					        maxLength = {40}
					        placeholder = "#Number"
					        onChangeText={(number) => this.setState({number:number})}
					        keyboardType={'numeric'}
					        onSubmitEditing={() => {this._loadPokemonsFromNumber(this.state.number)}}
					      />
						</View>
						<View style={styles.picker_container}>
							<Picker
								selectedValue={this.state.firstType}
								style={styles.picker_items}
								onValueChange={(itemValue, itemIndex) =>
								   this.setState({firstType: itemValue}, this._loadPokemonsFromSelectedFirstType(itemValue))
								}>
								<Picker.Item label="Fighting" value="Fighting" />
								<Picker.Item label="Dragon" value="Dragon" />
								<Picker.Item label="Water" value="Water" />
								<Picker.Item label="Electric" value="Electric" />
								<Picker.Item label="Fairy" value="Fairy" />
								<Picker.Item label="Fire" value="Fire" />
								<Picker.Item label="Ice" value="Ice" />
								<Picker.Item label="Bug" value="Bug" />
								<Picker.Item label="Normal" value="Normal" />
								<Picker.Item label="Grass" value="Grass" />
								<Picker.Item label="Poison" value="Poison" />
								<Picker.Item label="Psychic" value="Psychic" />
								<Picker.Item label="Rock" value="Rock" />
								<Picker.Item label="Ground" value="Ground" />
								<Picker.Item label="Ghost" value="Ghost" />
								<Picker.Item label="Dark" value="Dark" />
								<Picker.Item label="Flying" value="Flying" />
							</Picker>
							<Picker
								selectedValue={this.state.secondType}
								style={styles.picker_items}
								onValueChange={(itemValue, itemIndex) =>
								   this.setState({secondType: itemValue}, this._loadPokemonsFromSelectedSecondType(itemValue))
								}>
								<Picker.Item label="Fighting" value="Fighting" />
								<Picker.Item label="Dragon" value="Dragon" />
								<Picker.Item label="Water" value="Water" />
								<Picker.Item label="Electric" value="Electric" />
								<Picker.Item label="Fairy" value="Fairy" />
								<Picker.Item label="Fire" value="Fire" />
								<Picker.Item label="Ice" value="Ice" />
								<Picker.Item label="Bug" value="Bug" />
								<Picker.Item label="Normal" value="Normal" />
								<Picker.Item label="Grass" value="Grass" />
								<Picker.Item label="Poison" value="Poison" />
								<Picker.Item label="Psychic" value="Psychic" />
								<Picker.Item label="Rock" value="Rock" />
								<Picker.Item label="Ground" value="Ground" />
								<Picker.Item label="Ghost" value="Ghost" />
								<Picker.Item label="Dark" value="Dark" />
								<Picker.Item label="Flying" value="Flying" />
							</Picker>
						</View>
					</View>
					<View style={styles.button_container}>
						<TouchableOpacity  
							style={styles.button}
					        title = "Rechercher" 
					        onPress={() => this._loadPokemonsFromSearchText(this.state.text)}>
					        <Text> Rechercher</Text>
					    </TouchableOpacity>
					</View>
				</View>		
				<View style = {styles.list_container}>
					<FlatList
					  data={this.state.pokemons}
					  keyExtractor={(item) => item.id.toString()}
					  horizontal={false}
					  numColumns={4}
					  ItemSeparatorComponent={this.FlatListItemSeparator}
					  renderItem={({item}) => <PokemonItems pokemon={item} displayPokemonDetail={this._displayPokemonDetail}/>}
					/>    
				</View>
			</View>
		)
	}
}

export default Search;

const styles = StyleSheet.create({
	main_container:{
		flex:1,
		padding:10
	},
	search_container : {
		marginTop:50
	},
	searchInputs_container:{
		alignItems:'flex-start'
	},
	textInputs : {
		height:50,
		padding:5
	},
	button_container : {
		backgroundColor:'#fff'
	},
	button:{
		height:40,
		alignItems:'center',
		justifyContent:'center'
	},

	picker_container:{
		flexDirection:'row'
	},
	picker_items:{
		height: 50,
		width: 150,
		flex:1
	},
	list_container:{
		marginTop:10,
		alignItems:'center',
		justifyContent:'center'
	}
});