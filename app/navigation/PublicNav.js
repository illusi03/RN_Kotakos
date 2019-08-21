import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screen/Home'
import Login from '../screenPublic/Login'

const PublicNav = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Beranda',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={25} />
      )
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Autentikasi',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-contact" color={tintColor} size={25} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: '#0597f2',
      inactiveTintColor: '#0071b8',
      style: {
        backgroundColor: '#f0f0f0',
        borderTopWidth: 0,
        shadowOffset: { width: 6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 6,
        paddingTop: 10
      }
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer(PublicNav)