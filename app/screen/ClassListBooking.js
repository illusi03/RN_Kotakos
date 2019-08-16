import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import FlatListDemo from '../component/SearchableFlatlist';
import ChatInside from '../screen/Chat'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button } from 'react-native-paper'

import CompHeader from '../component/CompHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import CompListBooking from '../component/CompListBooking';

export default class ClassListBooking extends React.Component {

  state = {
    dataItemBooking: [
      {
        id: '1',
        title: 'Judul Pertama',
        imageUri: '',
        bookingDate: '32 Mei 2011',
        bookingDuration: '1 Bulan'
      },
      {
        id: '2',
        title: 'Judul Kedua',
        imageUri: '',
        bookingDate: '14 Agustus 2011',
        bookingDuration: '1 Bulan'
      }
    ]
  }

  render() {
    return (
      <View style={[
        styles.container, {
          flex: 1,
          paddingVertical: 15,
          paddingHorizontal: 10
        }]}>

        {/* CardContainer */}
        <FlatList
          data={this.state.dataItemBooking}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CompListBooking />
          )}
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  cardSimpleContainer: {
    shadowColor: '#000000',
    shadowOffset: {
      height: 3,
      width: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    elevation: 5
  },
  textContent: {
    fontSize: 14,
    color: '#000'
  }
});