import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import Navigation from './navigation/navigation.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Navigation/>
      </View>
      
    )
  }
}