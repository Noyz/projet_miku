import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class PokemonItem extends React.Component {
	constructor(props){
		super(props);
		pokemon : []
	}
	render(){
		return(
			<View>
				<View style = {styles.main_container}>
					<Image source={this.props.pokemon.image} style = {styles.image}/>
					<Text style={styles.text}> {this.props.pokemon.name.english}</Text>
					<Text style={styles.text}> {'# ' + this.props.pokemon.id}</Text>
				</View>
			</View>
		)
	}
};

export default PokemonItem;

const styles = StyleSheet.create({
	image :{
		width:100,
		height:100,
		borderWidth:1
	},
	text:{
		textAlign: 'center'
	}
})