import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text
} from "react-native";
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';

// import PrivateNav from '../navigation/PrivateNav';
// import ClassHome from '../screen/Home';
// import ClassListKos from '../screen/ClassListKos';
// import ClassDetailKos from '../screen/ClassDetailKos';
// import ClassIklanTambah from '../screen/ClassIklanTambah';
// import ClassDetailBooking from '../screen/ClassDetailBooking';

class CheckStack extends Component {
  state = {
    bagus: ''
  }
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    try {
      const fetchDataMentah = await AsyncStorage.getItem('userToken');
      console.log(fetchDataMentah)
      if (fetchDataMentah != null) {
        this.props.navigation.navigate('PrivateStack')
      } else {
        this.props.navigation.navigate('PublicStack')
      }
    } catch (e) {
      alert(e)
    }
  };

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold'
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
    alignItems: 'center'
  }
})

//export default App;
export default CheckStack;