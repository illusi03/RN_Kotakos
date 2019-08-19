import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text
} from "react-native";
import { Button } from 'react-native-paper'

import PrivateNav from '../navigation/PrivateNav';
import ClassHome from '../screen/Home';
import ClassListKos from '../screen/ClassListKos';
import ClassDetailKos from '../screen/ClassDetailKos';
import ClassIklanTambah from '../screen/ClassIklanTambah';
import ClassDetailBooking from '../screen/ClassDetailBooking';

class CheckStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: 'false'
    }
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('userObj');
    const userToken = false;
    this.props.navigation.navigate(userToken ? 'PrivateStack' : 'PublicStack');
  };

  render() {
    return (
      // <View>
      //   <ActivityIndicator />
      //   <StatusBar barStyle="default" />
      // </View>
      <View style={[styles.container, styles.horizontal]}>
        <Text style={{
          fontSize:20,
          fontWeight:'bold'
        }}>HARAP TUNGGU...</Text>
        <ActivityIndicator size={50} color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})

//export default App;
export default CheckStack;