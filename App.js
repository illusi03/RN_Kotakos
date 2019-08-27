import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import PrivateNav from './app/navigation/PrivateNav'
import PublicNav from './app/navigation/PublicNav'
import PrivateStack from './app/navigation/PrivateStack'
import PublicStack from './app/navigation/PublicStack'
import CheckStack from './app/navigation/CheckStack'
import Home from "./app/screen/Home";

import {Provider} from 'react-redux'
import Store from './app/_redux/Store'


const AppNavigator = createSwitchNavigator({
  PrivateStack: PrivateStack,
  PublicStack:PublicStack,
  CheckStack:CheckStack
}, {
    initialRouteName: 'CheckStack'
  })
const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App;