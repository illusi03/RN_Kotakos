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
import IonIcon from 'react-native-vector-icons/Ionicons';

class CompFeatured extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: 'black', marginHorizontal: 15 }}>
          {this.props.title}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <IonIcon name="ios-star" size={12} color='black' style={{ marginHorizontal: 2 }} />
          <IonIcon name="ios-star" size={12} color='black' style={{ marginHorizontal: 2 }} />
          <IonIcon name="ios-star" size={12} color='black' style={{ marginHorizontal: 2 }} />
          <IonIcon name="ios-star" size={12} color='black' style={{ marginHorizontal: 2 }} />
          <IonIcon name="ios-star" size={12} color='black' style={{ marginHorizontal: 2 }} />
        </View>
      </View>
    );
  }
}

export default CompFeatured;
