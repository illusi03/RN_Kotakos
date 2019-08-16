import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import MemberNavigator from './app/navigation/MemberUser'




const App = createStackNavigator({
  
  MemberNavigation: {
    screen: MemberNavigator,
    navigationOptions: {
      header : null ,     
    }
  }
    
 
  })


export default createAppContainer(App)