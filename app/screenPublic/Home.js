import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import { Button } from 'react-native-paper'
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoLogin from '../assets/illustrator/login.png'

class ClassHome extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Tess</Text>
      </View>
    );
  }
}

const StackPublic = createStackNavigator({
  ClassHome: ClassHome,
}, {
    initialRouteName: "ClassHome",
    headerMode: 'none'
  });

const ContainerPublic = createAppContainer(StackPublic);

class Home extends Component {
  render() {
    return (
      <ContainerPublic />
    );
  }
}
//export default App;
export default Home;
