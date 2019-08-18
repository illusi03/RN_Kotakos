import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import RegisterForm from '../component/RegisterForm'
import ProfileScreen from './Profile'
import LoginSultanForm from './LoginSultanForm'

import CompHeader from '../component/CompHeader';

class Profile extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <CompHeader/>
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>Profile Screen</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f0f0'
  }
});
export default Profile;