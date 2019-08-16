import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text} from 'react-native';

//PropsNya
// placeholder, textLabel
export default class CompTextInputIklan extends Component {
  render() {
    return (
      <View style={{ marginBottom: 5 }}>
        <View style={{
          flexDirection: 'row',
          paddingLeft: 5
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000'
          }}>{this.props.textLabel} </Text>
          <Text style={{
            color: 'red',
            fontSize: 25
          }}>*</Text>
        </View>
        <TextInput style={{
          borderColor: '#303f9f',
          fontSize: 20,
          color: '#000'
        }}
          placeholder={this.props.placeholder}
          underlineColorAndroid='#303f9f'
        />
      </View>
    );
  }
}
