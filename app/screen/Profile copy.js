import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button
  } from 'react-native';
import { thisExpression } from '@babel/types';

export default class ProfileScreen extends React.Component {
  Loggedout= () => {
    this.props.navigation.navigate('LoginAwal')
  }
    render() {
    return (

    <View>
        <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
        <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.props.email}</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
            <TouchableOpacity  style={styles.buttonContainer} onPress={this.Loggedout}>
                <Text>Log Out</Text>  
              </TouchableOpacity> 
        </View>
        </View>
        </View>
    </View>
    )}
}

const styles = StyleSheet.create({
    container : {
      width : '100%',
      height : '100%'
    },
    button: {
        backgroundColor: "#00b5ec",
        marginTop:200,
      },
      header:{
        backgroundColor: "#00BFFF",
        height:200,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      });    