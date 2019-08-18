import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import PrivateNav from './app/navigation/PrivateNav'
import PublicNav from './app/navigation/PublicNav'
import PrivateStack from './app/navigation/PrivateStack'
import PublicStack from './app/navigation/PublicStack'
import Home from "./app/screen/Home";



const App = createSwitchNavigator({
  PrivateStack: {
    screen: PrivateStack,
    navigationOptions: {
      header : null ,     
    }
  },
  PublicStack: {
    screen: PublicStack,
    navigationOptions: {
      header : null ,     
    }
  }
},{
  initialRouteName:'PrivateStack',
  headerMode:'none'
})


export default createAppContainer(App)