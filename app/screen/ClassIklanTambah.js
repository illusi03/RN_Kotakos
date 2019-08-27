import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Image, Picker } from 'react-native';
import { Appbar, Button, Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tabs, Tab, TabHeading } from 'native-base';

import CompMaps from '../component/CompMaps';
import CompTextInput from '../component/CompTextInputIklan';

import MarkerNya from '../assets/icon/icon_marker.png'
import MapView, { Marker } from 'react-native-maps';
import VarGlobal from '../environtment/VarGlobal'

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Geocoder from 'react-native-geocoding';
import ImagePicker from 'react-native-image-picker';


class ClassIklanTambah extends Component {
  state = {
    region: {
      latitude: -7.325043,
      longitude: 108.221384,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    },
    tmpname: '',
    tmplat: '',
    tmplong: '',
    tmproom: '',
    tmpprice: '',
    tmptype: '',
    tmpdescription: '',
    tmpwc: true,
    tmpwifi: true,
    tmpkeyRoom: true,
    tmpbed: true,
    tmpelectric: true,
    tmpsize: '5x2m',
    tmpuserId: '',
    tmpProv: '',
    tmpProvName: '',
    tmpKab: '',
    tmpKabName: '',
    tmpKec: '',
    tmpKecName: '',
    tmpKel: '',
    tmpKelName: '',
    dataProv: [],
    dataKab: [],
    dataKec: '',
    dataKel: '',
    dataItem: {
      name: '',
      lat: '',
      long: '',
      room: '',
      price: '',
      type: '',
      description: '',
      wc: true,
      wifi: true,
      keyRoom: true,
      bed: true,
      electric: true,
      size: '3x5m',
      userId: ''
    },
    provId: '',
    kabId: '',
    kecId: '',
    kelId: '',
    avatarSource: ''
  }
  static navigationOptions = {
    title: 'KotaKos',
    header: null,
    headerStyle: {
      backgroundColor: '#00BFFF',
    },
    headerTintColor: '#2d3c4d',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  simpanData = async () => {
    try {
      const userTokenTemp = await AsyncStorage.getItem('userToken');
      const userStrTemp = await AsyncStorage.getItem('userObj');
      const objUser = await JSON.parse(userStrTemp);
      await this.setState({
        dataItem: {
          name: this.state.tmpname,
          lat: this.state.region.latitude.toString(),
          long: this.state.region.longitude.toString(),
          room: parseInt(this.state.tmproom),
          price: parseInt(this.state.tmpprice),
          type: this.state.tmptype,
          description: this.state.tmpdescription,
          // photo:this.state.avatarSource,
          wc: this.state.tmpwc,
          wifi: this.state.tmpwifi,
          keyRoom: this.state.tmpkeyRoom,
          bed: this.state.tmpbed,
          electric: this.state.tmpelectric,
          size: this.state.tmpsize,
          userId: objUser.id
        }
      })
      console.log(this.state.dataItem)
      const configBarier = {
        headers: { Authorization: "bearer " + userTokenTemp }
      };
      await axios.post(`${VarGlobal.host}/dorm`, this.state.dataItem, configBarier)
      alert('Berhasil ditambahkan')
    } catch (e) {
      console.log(`ERROR DI Simpan Data Iklan Tambah : ${e}`)
    }
  }
  _getWilayahProvince = async () => {
    const responseTemporer = await axios.get("http://dev.farizdotid.com/api/daerahindonesia/provinsi");
    await this.setState({
      dataProv: responseTemporer.data.semuaprovinsi
    })
  }
  _getWilayahKab = async () => {
    const responseTemporer = await axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/${this.state.tmpProv}/kabupaten`);
    await this.setState({
      dataKab: responseTemporer.data.kabupatens
    })
  }
  _getWilayahKec = async () => {
    await axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/${this.state.tmpKab}/kecamatan`);
  }
  _getWilayahKel = async () => {
    await axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/kecamatan/${this.state.tmpKec}/desa`);
  }
  _aksiTambah = () => {
    this.simpanData();
  }
  componentDidMount() {
    this._getWilayahProvince();
  }
  onRegionChange = (region) => {
    this.setState({ region });
  }
  _getDataMap = async () => {
    await Geocoder.init("AIzaSyCkjvOAUH_J98nKBS5GIM774BzChoUCadA");
    Geocoder.from(this.state.region.latitude, this.state.region.latitude)
      .then(json => {
        var addressComponent = json;
        // console.log(addressComponent);
        alert(addressComponent);
      })
      .catch(error => console.warn(error));
  }
  ambilDataMapName = () => {
    this._getDataMap();
  }

  showPopupImage = () => {
    const options = {
      title: 'Pilih Photo',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    return (
      <View>
        {/* Header Detail Kost */}
        <View style={[styles.cardSimpleContainer, {
          height: 55,
          width: '100%',
          borderRadius: 0,
          backgroundColor: '#0476d9',
          paddingHorizontal: 10,
          paddingVertical: 5,
          margin: 0,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center'
          //AlignItem Untuk center HORIZONTAL
        }]}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
          <Text style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: 'bold'
          }}>KotaKos</Text>
          <Icon name='cube' size={30} color='#fff' />
        </View>

        <View style={{ padding: 15 }}>
          <ScrollView>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 10
            }}>
              <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#000',
              }}>Tambah Data Iklan</Text>
            </View>
            <View style={{
              backgroundColor: '#4f83cc',
              borderWidth: 0.2,
              marginBottom: 18
            }} />

            <View style={{ marginBottom: 5 }}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: 5
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000'
                }}>Nama Kos </Text>
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
                onChangeText={(a) => this.setState({ tmpname: a })}
                placeholder='Masukan Nama Kos'
                underlineColorAndroid='#303f9f'
              />
            </View>

            {/* 
            <View style={{ marginBottom: 5 }}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: 5
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000'
                }}>Provinsi</Text>
                <Text style={{
                  color: 'red',
                  fontSize: 25
                }}>*</Text>
              </View>
              <Picker
                selectedValue={this.state.tmpProv}
                style={{ flex: 1 }}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({
                    tmpProv:itemValue
                  })
                  if(this.state.tmpProv.length>0){
                    this._getWilayahKab().then().catch();
                  }
                }} styles={{ fontSize: 18 }}>
                  {this.state.dataProv.map( (item,index) => {
                    return(
                      <Picker.Item key={`${item.id}`} label={item.nama} value={item.id} />
                    )
                  })}
              </Picker>
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: 5
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000'
                }}>Kab. Kota</Text>
                <Text style={{
                  color: 'red',
                  fontSize: 25
                }}>*</Text>
              </View>
              <Picker
                selectedValue={this.state.tmpKab}
                style={{ flex: 1 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({
                    tmpKab:itemValue
                  })
                } styles={{ fontSize: 18 }}>
                  {this.state.dataKab.map( (item,index) => {
                    return(
                      <Picker.Item key={`${item.id}`} label={item.nama} value={item.id} />
                    )
                  })}
              </Picker>
            </View> */}



            <Text style={{
              fontSize: 15,
              fontWeight: '200',
              marginBottom: 10
            }}>
              Search alamat / area kos anda di Peta, kemudian pindahkan pin di peta ke lokasi tepat kos Anda.
            </Text>
            <View style={{
              height: 250
            }}>
              <MapView style={{
                width: '100%',
                height: '100%'
              }}
                initialRegion={this.state.region}
                onRegionChangeComplete={this.onRegionChange}>
                <Marker
                  coordinate={this.state.region}
                  title={"Kosan"}
                  description={" - Marker kosan dari KotaKos - "}
                />
              </MapView>
            </View>

            <View style={{
              flexDirection: 'row'
            }}>
              <View style={{ flex: 1 }}>
                {/*  */}
                <View style={{ marginBottom: 5 }}>
                  <View style={{
                    flexDirection: 'row',
                    paddingLeft: 5
                  }}>
                    <Text style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000'
                    }}>Lat. </Text>
                    <Text style={{
                      color: 'red',
                      fontSize: 25
                    }}>*</Text>
                  </View>
                  <TextInput style={{
                    borderColor: '#303f9f',
                    fontSize: 15,
                    color: '#000'
                  }}
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder='Latitude'
                    underlineColorAndroid='#303f9f'
                    value={this.state.region.latitude.toString()}
                  />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <View style={{
                    flexDirection: 'row',
                    paddingLeft: 5
                  }}>
                    <Text style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000'
                    }}>Long. </Text>
                    <Text style={{
                      color: 'red',
                      fontSize: 25
                    }}>*</Text>
                  </View>
                  <TextInput style={{
                    borderColor: '#303f9f',
                    fontSize: 15,
                    color: '#000'
                  }}
                    value={this.state.region.longitude.toString()}
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder='Longitude'
                    underlineColorAndroid='#303f9f'
                  />
                </View>
              </View>
            </View>

            <View style={{ marginBottom: 5 }}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: 5
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000'
                }}>Jumlah Kamar</Text>
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
                onChangeText={(a) => this.setState({ tmproom: a })}
                keyboardType='numeric'
                placeholder='Masukan Jumlah Kamar'
                underlineColorAndroid='#303f9f'
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: 5
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000'
                }}>Harga / Bulan </Text>
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
                onChangeText={(a) => this.setState({ tmpprice: a })}
                keyboardType='numeric'
                placeholder='Masukan Harga per Bulan'
                underlineColorAndroid='#303f9f'
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: 5
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000'
                }}>Jenis Kosan </Text>
                <Text style={{
                  color: 'red',
                  fontSize: 25
                }}>*</Text>
              </View>
              <Picker
                selectedValue={this.state.tmptype}
                style={{ flex: 1 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ tmptype: itemValue })
                } styles={{ fontSize: 18 }}>
                <Picker.Item label="Putra" value="Putra" />
                <Picker.Item label="Putri" value="Putri" />
              </Picker>
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: 5
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000'
                }}>Masukan Deskripsi </Text>
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
                onChangeText={(a) => this.setState({ tmpdescription: a })}
                placeholder='Masukan Deskripsi'
                underlineColorAndroid='#303f9f'
                multiline={true}
                numberOfLines={2}
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: 5
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000'
                }}>Masukan Photo </Text>
                <Text style={{
                  color: 'red',
                  fontSize: 25
                }}>*</Text>
              </View>
              <Button mode='contained' style={{
                backgroundColor: '#0476d9'
              }} onPress={this.showPopupImage}>
                <Text style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold'
                }}>Pilih Photo</Text>
              </Button>
              <Image source={this.state.avatarSource ? this.state.avatarSource : {uri:'../assets/dummy.jpg'}} 
              style={this.state.avatarSource ? {marginTop:10, width:'100%',height:350} : {marginTop:10}} />
            </View>
            <Button mode='contained' style={{
              backgroundColor: '#0476d9'
            }} onPress={this._aksiTambah}>
              <Text style={{
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold'
              }}>SUBMIT DATA</Text>
            </Button>
            <View style={{ height: 100 }} />
          </ScrollView>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: '#e6eefc'
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  markerNya: {
    height: 48,
    width: 48
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

export default ClassIklanTambah;