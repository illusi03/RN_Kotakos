import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tabs, Tab, TabHeading } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import CompHeader from '../component/CompHeader';
import ListBooking from './ClassListBooking';
import ListFavorite from './ClassListFavorite';

export default class Wishlist extends React.Component {
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CompHeader />
        <Tabs>
          <Tab heading={
            <TabHeading style={{ backgroundColor: '#0476d9' }}>
              <Icon name="list-alt" color='#fff' size={20} />
              <Text style={{ color: '#fff', fontSize: 16 }}>  Booking </Text>
            </TabHeading>
          }>
            <ListBooking />
          </Tab>
          <Tab heading={
            <TabHeading style={{ backgroundColor: '#0476d9' }}>
              <Icon name="bookmark" color='#fff' size={20} />
              <Text style={{ color: '#fff', fontSize: 16 }}> Favorite</Text>
            </TabHeading>
          } >
            <ListFavorite />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});