import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import RegisterForm from '../component/RegisterForm'
import ProfileScreen from './Profile'
import LoginSultanForm from './LoginSultanForm'
import {Button} from 'react-native-paper'

import CompHeader from '../component/CompHeader';

class Profile extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <CompHeader/>
        <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Text>Profile Screen</Text>
          <Button mode='contained'>
            <Text>Logout</Text>
          </Button>
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