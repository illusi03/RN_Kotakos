import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import FlatListDemo from '../component/SearchableFlatlist';
import ChatInside from '../screen/Chat'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import CompHeader from '../component/CompHeader';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ChatScreen extends React.Component {

  render() {
    return (
      <View style={{
        flex: 1,
        position: 'relative'
      }}>
        <CompHeader />
        <View style={[
          styles.container, {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
          }]}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
          }}>
            <Icon name='ios-chatboxes' size={40} color='#0476d9' />
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#0476d9'
            }}>Belum Terdapat Percakapan</Text>
            <Text style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#53aefc',
              textAlign: 'center'
            }}>Untuk Melihat, Silakan Mulai Terlebih Dahulu Percakapan</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  }
});