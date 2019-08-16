import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ChatInside extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Icon name='ios-chat' size={70} color='#0476d9'/>
          <Text style={{
            fontSize:25,
            fontWeight:'bold',

          }}>Belum terdapat Percakapan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f0f0f0',
    padding:10
  }
});