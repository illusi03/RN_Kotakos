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
import {Button} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';

import CompHeader from '../component/CompHeader';

class Profile extends React.Component {

  _logoutAsync = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {}
    this.props.navigation.navigate('PublicStack')
  };


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
          <Button mode='contained' onPress={()=> this._logoutAsync()}>
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