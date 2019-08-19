import React, { Component } from "react";
import { TextInput, Avatar, Button, Title, Paragraph, Appbar, Searchbar, IconButton } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Slideshow from 'react-native-image-slider-show';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import CompHeader from '../component/CompHeader';
import CompKotaPopuler from '../component/CompKotaPopuler';
import ClassListKos from './ClassListKos';
import ClassDetailKos from './ClassDetailKos';
import ClassIklanTambah from './ClassIklanTambah';
import ClassDetailBooking from './ClassDetailBooking';
import ChatScreen from './ChatScreen'

class ClassHome extends Component {
  state = {
    position: 1,
    interval: null,
    dataSource: [
      { url: require('../assets/slider/promo1.jpg') },
      { url: require('../assets/slider/promo2.jpg') },
      { url: require('../assets/slider/promo3.jpg') },
      { url: require('../assets/slider/promo4.jpg') },
      { url: require('../assets/slider/promo5.jpg') },
    ],
    dataItemKotaPopuler: [
      {
        id: '1',
        namaKota: 'Bandung',
        uriImage: require('../assets/kota/bandung.jpg')
      },
      {
        id: '2',
        namaKota: 'Yogyakarta',
        uriImage: require('../assets/kota/yogyakarta.jpg')
      },
      {
        id: '3',
        namaKota: 'Semarang',
        uriImage: require('../assets/kota/semarang.jpg')
      },
      {
        id: '4',
        namaKota: 'Jakarta',
        uriImage: require('../assets/kota/jakarta.jpg')
      },
      {
        id: '5',
        namaKota: 'Surabaya',
        uriImage: require('../assets/kota/surabaya.jpg')
      },
      {
        id: '6',
        namaKota: 'Denpasar',
        uriImage: require('../assets/kota/yogyakarta.jpg')
      }
    ]
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <View>
        <CompHeader />
        <View style={{
          backgroundColor: '#e6eefc',
          padding: 5
        }}>
          {/* Bungkus Button Cari */}
          <View style={[
            styles.cardSimpleContainer
            , { elevation: 3, margin: 2, padding: 10 }]}>
            <Text style={{
              color: '#474747',
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: 19
            }}>Hai,</Text>
            <Text style={{
              fontSize: 14,
              paddingBottom: 5
            }}>Mau Cari Kost Dimana ?</Text>
            <View style={{ position: 'relative' }}>
              <Button onPress={() => this.props.navigation.navigate('ClassListKos')} style={{
              
                backgroundColor: '#e8e8e8',
                borderColor: '#0476d9',
                borderRadius: 8,
                borderWidth: 1
              }}></Button>
              <Text style={{ position: 'absolute', left: 40, top: 8 }}>Cari</Text>
              <Icon name="search" size={20} color="#a1a7ad" style={{
                position: 'absolute',
                left: 10,
                top: 8
              }} />
            </View>
          </View>

          <ScrollView>
            {/* Bungkus Content (Promo dan Kota Populer) */}
            <View style={[
              styles.cardSimpleContainer
              , { elevation: 3, margin: 2, padding: 10 }]}>
              {/* Promo Iklan */}
              <View style={[styles.itemBaris]}>
                <Text style={{ color: '#474747', fontWeight: 'bold', paddingVertical: 10, fontSize: 19 }}>Promo</Text>
                <View style={{ padding: 0, borderRadius: 5 }}>
                  <Slideshow
                    height={145}
                    overlay={false}
                    arrowSize={2}
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    onPositionChanged=
                    {position => this.setState({ position })}
                    containerStyle={{ resideMode: 'center' }}
                  />
                </View>
              </View>

              {/* Component Memasang Iklan */}
              <View style={
                [styles.cardSimpleContainer,
                {
                  elevation: 1,
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: '#0476d9'
                }]}>
                <View style={{ flex: 2 }}>
                  <Text style={{ color: 'white' }}>Anda Pemilik Kos ?</Text>
                  <Text style={{ color: 'white' }}>Tertarik Mengiklankan Kosan ?</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Button mode='outlined' style={[{ color: 'white', backgroundColor: 'transparent', borderColor: 'white', borderWidth: 2, fontColor: 'white' }]}
                    onPress={() => this.props.navigation.navigate('ClassIklanTambah')}
                  >
                    <Text style={{ color: 'white' }}>Pasang</Text>
                  </Button>
                </View>
              </View>

              {/* Bungkusan Kota Populer */}
              <View style={[{ flexDirection: 'column' }]}>
                <Text style={{ color: '#474747', fontWeight: 'bold', paddingTop: 10, fontSize: 19 }}>Kota Populer</Text>
                <FlatList
                  data={this.state.dataItemKotaPopuler}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <CompKotaPopuler paramNavigate={null} dataItem={item} />
                  )}
                  horizontal={true}
                />
              </View>
            </View>
            <View style={{
              height: 350
            }}></View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: '#f0f0f0'
  },
  cardContainer: {
    marginVertical: 5
  },
  itemBaris: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingVertical: 5
  },
  itemKolom: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5
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
    padding: 10,
    margin: 10,
    borderRadius: 3,
    elevation: 3
  }
});

//export default App;
export default ClassHome;
