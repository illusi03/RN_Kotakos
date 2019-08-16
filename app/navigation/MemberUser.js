import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screen/Home'
import ChatStack from '../screen/ChatScreen'
import Wishlist from '../screen/Wishlist'
import Profile from '../screen/Profile'

const MemberNavigator = createBottomTabNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={25} />
      )
    }
  },
  Chat: {
    screen: ChatStack,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: {
      tabBarLabel: 'Wishlist',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor} size={28} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: '#0597f2',
      inactiveTintColor: '#0071b8',
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        shadowOffset: { width: 6, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 6,
        paddingTop: 10
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer(MemberNavigator)