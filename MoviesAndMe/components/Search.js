// Components/Search.js

import React from 'react'
import {TouchableOpacity ,StyleSheet, View, TextInput, FlatList, Text } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
	     	<Text style={{color:'#5EB6DD'}}> Rechercher </Text>
    	</TouchableOpacity>
    	<FlatList
		  data={[{key: 'a'}, {key: 'b'}]}
		  renderItem={({item}) => <Text>{item.key}</Text>}
		/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
  	flex:1,
    marginTop: 40,
    flexDirection: 'column',
    padding: 20
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