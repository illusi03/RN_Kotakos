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

class ClassHome extends Component {
  state = {
    position: 1,
    interval: null,
    dataSource: [
      {
        url: 'https://static.mamikos.com/uploads/cache/data/user/2019-08-02/T71F3KDd-360x480.jpg',
      }, {
        url: 'https://mamikos.com/uploads/cache/data/user/2019-01-28/I9kswUvH-360x480.jpg',
      }, {
        url: 'https://mamikos.com/uploads/cache/data/user/2019-02-06/tYYKBgjd-360x480.jpg',
      }
    ],
    dataItemKotaPopuler: [
      {
        id: '1',
        namaKota: 'Bandung',
        uriImage: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/03/wisata-kota-bandung.jpg'
      },
      {
        id: '2',
        namaKota: 'Jakarta',
        uriImage: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/03/wisata-kota-bandung.jpg'
      },
      {
        id: '3',
        namaKota: 'Yogyakarta',
        uriImage: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/03/wisata-kota-bandung.jpg'
      },
      {
        id: '4',
        namaKota: 'Yogyakarta',
        uriImage: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/03/wisata-kota-bandung.jpg'
      },
      {
        id: '5',
        namaKota: 'Yogyakarta',
        uriImage: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/03/wisata-kota-bandung.jpg'
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
                <View style={{ padding: 0, borderRadius:5 }}>
                  <Slideshow
                    height={145}
                    overlay={false}
                    arrowSize={2}
                    onPress={() => this.props.navigation.navigate('ClassDetailKos')}
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    onPositionChanged=
                    {position => this.setState({ position })
                    } />
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
                      <CompKotaPopuler paramNavigate={null} dataItem={item.id} />
                    )} 
                    horizontal={true}
                    />
              </View>
            </View>
            <View style={{
              height:350
            }}></View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const RootStackHome = createStackNavigator({
  ClassDetailKos: ClassDetailKos,
  ClassListKos: ClassListKos,
  ClassIklanTambah: ClassIklanTambah,
  ClassHome: ClassHome
}, {
    initialRouteName: "ClassHome",
    headerMode: 'none'
  });
const RootContainerHome = createAppContainer(RootStackHome);

class Home extends Component {
  render() {
    return (
      <RootContainerHome />
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
export default Home;
