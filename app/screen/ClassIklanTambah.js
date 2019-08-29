import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Image, Picker, Alert } from 'react-native';
import { Button, Text, ActivityIndicator } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MapView, { Marker } from 'react-native-maps';
import VarGlobal from '../environtment/VarGlobal'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Geocoder from 'react-native-geocoding';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { addKost, initKos } from '../_actions/ListKos';


class ClassIklanTambah extends Component {

  state = {
    region: {
      latitude: -7.325043,
      longitude: 108.221384,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    },
    tmpPanjangKamar: '',
    tmpLebarKamar: '',
    tmpUkuranKamar: '',
    tmpname: '',
    tmplat: '',
    tmplong: '',
    tmproom: '',
    tmpprice: '',
    tmptype: 'Putra',
    tmpdescription: '',
    tmpwc: false,
    tmpwifi: false,
    tmpkeyRoom: false,
    tmpbed: false,
    tmpelectric: false,
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

      const provinsiFilter = this.state.dataProv.filter((item) => {
        return item.id == this.state.tmpProv
      })
      const kabupatenFilter = this.state.dataKab.filter((item) => {
        return item.id == this.state.tmpKab
      })

      await this.setState({
        dataItem: {
          name: this.state.tmpname,
          lat: this.state.region.latitude.toString(),
          long: this.state.region.longitude.toString(),
          room: parseInt(this.state.tmproom),
          price: parseInt(this.state.tmpprice),
          type: this.state.tmptype,
          description: this.state.tmpdescription,
          province: provinsiFilter[0].nama,
          city: kabupatenFilter[0].nama,
          description: this.state.tmpdescription,
          photo: this.state.avatarSource,
          wc: this.state.tmpwc,
          wifi: this.state.tmpwifi,
          keyRoom: this.state.tmpkeyRoom,
          bed: this.state.tmpbed,
          electric: this.state.tmpelectric,
          size: `${this.state.tmpPanjangKamar}x${this.state.tmpLebarKamar}m`,
          userId: objUser.id
        }
      })

      let data = new FormData();
      // data.append({ uri: photo.uri, type: photo.type, name: photo.fileName });
      data.append('name', this.state.dataItem.name);
      data.append('lat', this.state.dataItem.lat);
      data.append('long', this.state.dataItem.long);
      data.append('room', this.state.dataItem.room);
      data.append('price', this.state.dataItem.price);
      data.append('type', this.state.dataItem.type);
      data.append('size', this.state.dataItem.size);
      data.append('description', this.state.dataItem.description);
      data.append('province', this.state.dataItem.province);
      data.append('city', this.state.dataItem.city);
      data.append('wc', this.state.dataItem.wc);
      data.append('wifi', this.state.dataItem.wifi);
      data.append('keyRoom', this.state.dataItem.keyRoom);
      data.append('bed', this.state.dataItem.bed);
      data.append('electric', this.state.dataItem.electric);
      data.append('photo', this.state.dataItem.photo);
      data.append('userId', this.state.dataItem.userId);

      this.props.dispatch(addKost(data, userTokenTemp))
      /*
      let berhasilInput = false
      await axios({
        url: `${VarGlobal.host}/dorm`,
        method: 'POST',
        data: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': `bearer ${userTokenTemp}`
        }
      })
        .then(function (response) {
          berhasilInput = true
        })
        .catch(function (error) {
          berhasilInput = false
          console.log(`error from image : ${error}`);
        })
      if (berhasilInput) {
        this.props.navigation.navigate('SWClassListKos')
      } else {
        alert('Harap isi data dengan benar')
      }
      */

      /*
      SETTING UP - CONFIG 2
      const configBarier = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': "bearer " + userTokenTemp }
      };
      await axios.post(`${VarGlobal.host}/dorm`, data, configBarier)
      console.log(data);
      */
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

      })
      .catch(error => console.warn(error));
  }
  ambilDataMapName = () => {
    this._getDataMap();
  }
  showPopupImage = () => {
    const options = {
      title: 'Pilih Photo'
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let tmpPhoto = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        const source = tmpPhoto;
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  manggilIsDone = () => {
    this.props.dispatch(initKos())
    this.props.navigation.navigate('SWClassListKos')
  }

  render() {
    //Disable Yellowbox
    console.disableYellowBox = true;

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
        {this.props.ListKos.isDoneAdd ? this.manggilIsDone()
          : false}
        {this.props.ListKos.isRejectAdd ?
          Alert.alert(
            'Warning',
            'Koneksi Gagal / Tidak Bisa mengambil data ...',
            [
              { text: 'OK', onPress: () => this.props.navigation.pop() },
            ]
          )
          : false}
        {this.props.ListKos.isLoading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <ActivityIndicator size={50}>
            </ActivityIndicator>
          </View> :
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
                  onValueChange={async (itemValue, itemIndex) => {
                    await this.setState({
                      tmpProv: itemValue
                    })
                    if (this.state.tmpProv.length > 0) {
                      this._getWilayahKab().then().catch();
                    }
                  }} styles={{ fontSize: 18 }}>
                  {this.state.dataProv.map((item, index) => {
                    return (
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
                  onValueChange={async (itemValue, itemIndex) =>
                    await this.setState({
                      tmpKab: itemValue
                    })
                  } styles={{ fontSize: 18 }}>
                  {this.state.dataKab.map((item, index) => {
                    return (
                      <Picker.Item key={`${item.id}`} label={item.nama} value={item.id} />
                    )
                  })}
                </Picker>
              </View>



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


              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Luas Kosan</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                paddingTop: 10
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
                      }}>Panjang (m) </Text>
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
                      keyboardType='numeric'
                      selectTextOnFocus={false}
                      placeholder='Panjang Kosan'
                      underlineColorAndroid='#303f9f'
                      onChangeText={(tmpPanjangKamar) => this.setState({ tmpPanjangKamar })}
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
                      }}>Lebar (m)</Text>
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
                      keyboardType='numeric'
                      selectTextOnFocus={false}
                      placeholder='Lebar Kosan'
                      underlineColorAndroid='#303f9f'
                      onChangeText={(tmpLebarKamar) => this.setState({ tmpLebarKamar })}
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

                <RadioForm
                  radio_props={[
                    {label:'Putra',value:'Putra'},
                    {label:'Putri',value:'Putri'}
                  ]}
                  initial={0}
                  onPress={(value) => { this.setState({ tmptype: value }) }}
                />
                {/* <Picker
                  selectedValue={this.state.tmptype}
                  style={{ flex: 1 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ tmptype: itemValue })
                  } styles={{ fontSize: 18 }}>
                  <Picker.Item label="Putra" value="Putra" />
                  <Picker.Item label="Putri" value="Putri" />
                </Picker> */}


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
                  fontSize: 17,
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
                  }}>Fitur Kos </Text>
                  <Text style={{
                    color: 'red',
                    fontSize: 25
                  }}>*</Text>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        tmpelectric: !this.state.tmpelectric
                      })
                    }}
                    style={this.state.tmpelectric ? styles.fiturAktif : styles.fiturDisaktif}>
                    <Icon name='bolt' size={15} color={this.state.tmpelectric ? '#fff' : '#0476d9'} style={{ marginRight: 5 }}></Icon>
                    <Text style={this.state.tmpelectric ? styles.fiturTextAktif : styles.fiturTextDisaktif}>Listrik</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        tmpbed: !this.state.tmpbed
                      })
                    }}
                    style={this.state.tmpbed ? styles.fiturAktif : styles.fiturDisaktif}>
                    <Icon name='bed' size={15} color={this.state.tmpbed ? '#fff' : '#0476d9'} style={{ marginRight: 5 }}></Icon>
                    <Text style={this.state.tmpbed ? styles.fiturTextAktif : styles.fiturTextDisaktif}>Kasur</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        tmpwc: !this.state.tmpwc
                      })
                    }}
                    style={this.state.tmpwc ? styles.fiturAktif : styles.fiturDisaktif}>
                    <Icon name='toilet' size={15} color={this.state.tmpwc ? '#fff' : '#0476d9'} style={{ marginRight: 5 }}></Icon>
                    <Text style={this.state.tmpwc ? styles.fiturTextAktif : styles.fiturTextDisaktif}>Toilet Didalam</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        tmpwifi: !this.state.tmpwifi
                      })
                    }}
                    style={this.state.tmpwifi ? styles.fiturAktif : styles.fiturDisaktif}>
                    <Icon name='wifi' size={15} color={this.state.tmpwifi ? '#fff' : '#0476d9'} style={{ marginRight: 5 }}></Icon>
                    <Text style={this.state.tmpwifi ? styles.fiturTextAktif : styles.fiturTextDisaktif}>Wifi</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        tmpkeyRoom: !this.state.tmpkeyRoom
                      })
                    }}
                    style={this.state.tmpkeyRoom ? styles.fiturAktif : styles.fiturDisaktif}>
                    <Icon name='key' size={15} color={this.state.tmpkeyRoom ? '#fff' : '#0476d9'} style={{ marginRight: 5 }}></Icon>
                    <Text style={this.state.tmpkeyRoom ? styles.fiturTextAktif : styles.fiturTextDisaktif}>Kunci 24 Jam</Text>
                  </TouchableOpacity>
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
                <Image source={this.state.avatarSource ? this.state.avatarSource : { uri: '../assets/dummy.jpg' }}
                  style={this.state.avatarSource ? { marginTop: 10, width: '100%', height: 350 } : { marginTop: 10 }} />
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
        }
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
  },
  fiturDisaktif: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#0476d9',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  fiturAktif: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0476d9',
    borderColor: '#0476d9',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  fiturTextAktif: {
    color: '#fff'
  },
  fiturTextDisaktif: {
    color: '#0476d9'
  },
});

const mapStateToProps = (state) => {
  return {
    ListKos: state.ListKos
  }
}

export default connect(mapStateToProps)(ClassIklanTambah);