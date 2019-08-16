import React, { Component } from 'react';
import { Card, Avatar, Button, Title, Paragraph, Appbar, Searchbar, IconButton } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

class CompHeader extends Component {
  render() {
    return (
      <View style={[styles.cardSimpleContainer,{
        height:55,
        width:'100%',
        borderRadius:0,
        backgroundColor:'#0476d9',
        paddingHorizontal:10,
        paddingVertical:5,
        margin:0,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
        //AlignItem Untuk center HORIZONTAL
      }]}>
        <Text style={{
          color:'#fff',
          fontSize:22,
          fontWeight:'bold'
        }}>KosCube</Text>
        <Icon name='cube' size={30} color='#fff'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: '#e6eefc'
  },
  cardSimpleContainerHead: {
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: '#303f9f',
    elevation: 2
  }
});

export default CompHeader;