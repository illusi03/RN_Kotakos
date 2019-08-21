import React, { Component } from 'react';
import { Card, TextInput, Avatar, Button, Title, Paragraph, Appbar, Searchbar, IconButton } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Share
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView, { Marker } from 'react-native-maps';

import CompFeatured from '../component/CompFeatured'
import CompKamarMenarik from '../component/CompKamarMenarik';
// import CompMaps from '../component/CompMaps';

import AsyncStorage from '@react-native-community/async-storage';


var SendIntentAndroid = require('react-native-send-intent');
 


class ClassDetailKos extends Component {
  componentDidMount(){
    this._cekLogin();
  }
  _cekLogin = async () => {
    const fetchDataMentah = await AsyncStorage.getItem('userToken');
    if (fetchDataMentah) {
      this.setState({
        udahLogin:true
      })
    }else{
      this.setState({
        udahLogin:false
      })
    }
  }

  constructor() {
    super();
    this.state = {
      isFotoState: true,
      udahLogin : false
    };
  }

  aksiHubKos = ()=>{
    SendIntentAndroid.sendPhoneDial('085224242412', false);
  }

  static navigationOptions = {
    title: 'Detail Kos',
    headerStyle: {
      backgroundColor: '#00BFFF',
    },
    headerTintColor: '#2d3c4d',
    headerTitleStyle: {
      fontWeight: 'bold',
    }, headerRight: (
      <TouchableOpacity onPress={() => alert('Share Btn')} style={{ marginRight: 10 }}>
        <IonIcon name='ios-git-merge' size={30} color='white' />
      </TouchableOpacity>
    )
  };
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  _compPetaView(isFotoState) {
    if (isFotoState) {
      return (
        <View>
          <View style={{ position: 'relative', paddingBottom: 0 }}>
            <Image source={this.props.navigation.getParam('itemNya').photo} style={{ height: 200, width: '100%' }} />
            {/* <TouchableOpacity onPress={() => alert('Tes')} style={{ position: 'absolute', right: 10, top: 5 }}>
              <Icon name="star" size={35} color='#ffffff' />
            </TouchableOpacity> */}
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#1b2836', padding: 5, height: 50 }}>
            <TouchableOpacity onPress={() => this._aksiPetaView(0)} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="image" size={25} color='#00a0d6' />
              <Text style={{ color: '#00a0d6' }}> Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._aksiPetaView(1)} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="map-marker-alt" size={25} color='#fff' />
              <Text style={{ color: '#fff' }}> Peta</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={{ height: 200, width: '100%', position: 'relative', paddingBottom: 0 }}>
            {/* <CompMaps /> */}
            <MapView style={{
              width: '100%',
              height: '100%'
            }}
              region={
                {
                  latitude: -6.295493,
                  longitude: 106.729348,
                  latitudeDelta: 0.0090,
                  longitudeDelta: 0.0090,
                }
              }>
              <Marker
                coordinate={
                  {
                    latitude: -6.295493,
                    longitude: 106.729348
                  }
                }
                title='Kost'
                description='Lokasi Kosan Yang dituju'
              />
            </MapView>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#1b2836', padding: 5, height: 50 }}>
            <TouchableOpacity onPress={() => this._aksiPetaView(0)} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="image" size={25} color='#fff' />
              <Text style={{ color: '#fff' }}> Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._aksiPetaView(1)} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="map-marker-alt" size={25} color='#00a0d6' />
              <Text style={{ color: '#00a0d6' }}> Peta</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  _aksiPetaView(jenisMenu) {
    if (jenisMenu == 0) {
      this.setState({
        isFotoState: true
      });
    } else {
      this.setState({
        isFotoState: false
      });
    }
  }

  render() {
    const item = this.props.navigation.getParam('itemNya');
    return (
      <View style={{ flex: 1 }}>
        {/* Header Detail Kost */}
        <View style={[styles.cardSimpleContainer, {
          height: 55,
          width: '100%',
          borderRadius: 0,
          backgroundColor: '#0476d9',
          paddingHorizontal: 10,
          paddingVertical: 5,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'space-between',
          flexDirection: 'row'
        }]}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-left" size={25} color="#fff" />
              </TouchableOpacity>
              <Text style={{
                color: '#fff',
                fontSize: 22,
                fontWeight: 'bold',
                paddingLeft: 20
              }}>KotaKos
              </Text>
            </View>
            <View style={{
              flex: 1, flexDirection: 'row', alignSelf: 'flex-end',
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
              <TouchableOpacity style={{
                paddingRight: 15
              }}>
                <IconMaterial name='star' size={30} color='#fff' />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onShare}>
                <IconMaterial name='share' size={30} color='#fff' />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, padding: 5, position: 'relative', backgroundColor: '#fafafa' }}>
          <ScrollView style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
            <View>
              {this._compPetaView(this.state.isFotoState)}

              {/* Konten satu */}
              <View style={{ padding: 15, paddingBottom: 20 }}>
                <View>
                  <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    <Text style={{ color: 'red' }}>
                      {item.type}
                    </Text>
                    <Text> - </Text>
                    <Text style={{ color: 'green' }}>
                      Ada {item.room} Kamar
                    </Text>
                    <Text> - </Text>
                    <Text>
                      {item.city}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'column', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'column', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 15, color: 'black' }}>
                      12 Agustus 2019 - 14.00
                    </Text>
                  </View>
                  {/* Sparator */}
                  <View style={{ borderColor: 'black', borderWidth: 0.2 }} />
                  <View style={{ flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 3 }}>
                    <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                      <Icon name="bolt" size={25} color='#0476d9' style={{ paddingRight: 5 }} />
                      <Text style={{ fontSize: 12, color: 'black' }}>TIDAK Termasuk Listrik</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                      <Icon name="dollar-sign" size={25} color='#0476d9' style={{ paddingRight: 5 }} />
                      <Text style={{ fontSize: 12, color: 'black' }}>TIDAK ada min. Bayar</Text>
                    </View>
                  </View>
                  {/* Sparator Luas Kamar */}
                  <View style={{ borderColor: 'black', borderWidth: 0.2 }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{
                      fontSize: 20, color: 'black', paddingVertical: 5, fontWeight: 'bold'
                    }}>Luas Kamar</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Icon name="compress" size={25} color='#0476d9' style={{ paddingRight: 5 }} />
                      <Text style={{ fontSize: 20, color: 'black', paddingLeft: 5, paddingBottom: 5 }}>
                        {item.size}
                      </Text>
                    </View>
                  </View>

                  {/* Sparator Untuk Deskripsi Kos */}
                  <View style={{ borderColor: 'black', borderWidth: 0.2 }} />
                  <View style={{
                    flexDirection: 'column',
                    paddingBottom: 10
                  }}>
                    <Text style={{
                      fontSize: 20,
                      color: 'black',
                      paddingVertical: 5,
                      fontWeight: 'bold'
                    }}>Deskripsi Kos</Text>
                    <Text style={{
                       color:'#000'
                    }}>Cupidatat cupidatat ad fugiat qui sint occaecat. Proident eiusmod reprehenderit in aliqua adipisicing deserunt cupidatat. Duis magna id consectetur exercitation in nulla duis officia ullamco nostrud quis consequat consectetur elit. Esse dolore pariatur officia occaecat. Quis do officia consectetur cupidatat eiusmod velit fugiat proident voluptate adipisicing esse deserunt id.</Text>
                  </View>

                  {/* Sparator */}
                  <View style={{ borderColor: 'black', borderWidth: 0.2 }} />
                  <View style={{ flexDirection: 'row', paddingVertical: 5, justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Fasilitas kost dan kamar</Text>
                  </View>

                  <View style={{ flexDirection: 'row', paddingVertical: 25, paddingHorizontal: 15, alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="bed" size={25} color='#0476d9' style={{ marginHorizontal: 15 }} />
                      <Text style={{ textAlign: 'center', fontSize: 12, color: 'black' }}>Kasur</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="toilet" size={25} color='#0476d9' style={{ marginHorizontal: 15 }} />
                      <Text style={{ textAlign: 'center', fontSize: 12, color: 'black', marginHorizontal: 15 }}>WC Didalam</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="wifi" size={25} color='#0476d9' style={{ marginHorizontal: 15 }} />
                      <Text style={{ textAlign: 'center', fontSize: 12, color: 'black', marginHorizontal: 15 }}>Wifi</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="key" size={25} color='#0476d9' style={{ marginHorizontal: 15 }} />
                      <Text style={{ textAlign: 'center', fontSize: 12, color: 'black', marginHorizontal: 15 }}>Key 24 Jam</Text>
                    </View>
                  </View>

                  {/* Sparator */}
                  <View style={{ borderColor: 'black', borderWidth: 0.2 }} />
                  <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 5 }}>
                    <CompFeatured title='Kebersihan'></CompFeatured>
                    <CompFeatured title='Kenyamanan'></CompFeatured>
                  </View>
                  <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 5 }}>
                    <CompFeatured title='Keamanan'></CompFeatured>
                    <CompFeatured title='Harga'></CompFeatured>
                  </View>
                  <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 5 }}>
                    <CompFeatured title='Fasilitas Kamar'></CompFeatured>
                    <CompFeatured title='Fasilitas Umum'></CompFeatured>
                  </View>
                  <View style={[styles.cardSimpleContainer, { backgroundColor: '#fff', flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 3 }]}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                      <Icon name='user-circle' size={40} color='#0476d9' />
                    </View>
                    <View style={{ flex: 6, paddingLeft: 2 }}>
                      <Text style={{ fontSize: 15, color:'#000'}}>Pemilik Kos</Text>
                      <Text style={{ fontSize: 15 , color:'#000'}}>Vera</Text>
                      <Text style={{ fontSize: 18, fontWeight: 'bold' , color:'#000'}}>085224242412</Text>
                    </View>
                    {/* <TouchableOpacity style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Minta Nomor</Text>
                    </TouchableOpacity> */}
                  </View>
                </View>
                {/* Kosan Menarik Lainya */}
                <ScrollView horizontal={true}>
                  <CompKamarMenarik room={3} title='Kosan Dahlia ' />
                  <CompKamarMenarik room={3} title='Kosan Dahlia ' />
                  <CompKamarMenarik room={3} title='Kosan Dahlia ' />
                </ScrollView>
              </View>
            </View>
            <View style={{ paddingBottom: 80 }}></View>
          </ScrollView>

          <View style={[styles.cardSimpleContainer, {
            borderColor: '#303f9f',
            borderWidth: 2,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            flexDirection: 'row',
            height: 65, width: '95%',
            position: 'absolute',
            left: '2%',
            right: 0,
            bottom: 0,
            justifyContent: 'space-between',
            alignItems: 'center'
          }]}>
            <View>
              <View>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 17,
                  color: '#000'
                }}>Rp. {item.price} / Bulan</Text>
                <Text style={{
                  fontWeight: 'bold',
                  color: '#000'
                }} >Pesan Sekarang?</Text>
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              marginHorizontal: 5
            }}>
              <TouchableOpacity style={{
                marginRight: 5,
                backgroundColor: '#0476d9',
                borderRadius: 8,
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                borderColor: '#0476d9'
              }}
              // onPress={this.aksiHubKos}
              >
                <Text style={{
                  fontWeight: 'bold',
                  color: '#fff'
                }}>Hubungi Kost</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                backgroundColor: '#0476d9',
                borderRadius: 8,
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                borderColor: '#0476d9'
              }}
                onPress={()=> {
                    if(this.state.udahLogin){
                      this.props.navigation.navigate('ClassDetailBooking')
                    }else{
                      this.props.navigation.navigate('ClassLogin')
                    }
                  }}
              >
                <Text style={{
                  fontWeight: 'bold',
                  color: '#fff'
                }}>Booking</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    backgroundColor: '#e6eefc'
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
    padding: 5,
    margin: 10,
    borderRadius: 3,
    elevation: 3
  }
});

export default ClassDetailKos;