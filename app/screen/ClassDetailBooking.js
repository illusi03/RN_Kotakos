import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Image, ScrollView } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from "react-native-modal-datetime-picker";

import AsyncStorage from '@react-native-community/async-storage';

export default class ClassDetailBooking extends Component {
  convertToRupiah(angka) {
    let rupiah = '';
    let angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
  }
  // Rupiah to angka
  convertToAngka(rupiah) {
    return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10);
  }

  constructor(props, context) {
    super(props, context);
    this.onValueChange = this.handleValueChangePicker.bind(this)
  }
  state = {
    isDateTimePickerVisible: false,
    durasiKos: '',
    isCheckedAgree: false,
    userObj : ''
  }
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
  handleDatePicked = date => {
    // console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };


  handleValueChangePicker(durasiKos) {
    this.setState({ durasiKos })
  }

  _ambilDataAsync = async () => {
    const fetchDataUserJSON = await AsyncStorage.getItem('userObj');
    const userObj = JSON.parse(fetchDataUserJSON);
    await this.setState({
      userObj
    })
    console.log(this.state.userObj)
  }


  componentDidMount(){
    this._ambilDataAsync();
  }

  render() {
    const { isCheckedAgree } = this.state;
    const item = this.props.navigation.getParam('itemNya');
    return (
      <View style={{
        flex: 1,
      }}>
        {/* header */}
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
          alignItems: 'center',
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
        <View style={{
          backgroundColor: '#f0f0f0',
          padding: 5,
          paddingTop: 20,
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 19,
            fontWeight: 'bold',
            color: '#000'
          }}>Tambah Booking Kos</Text>
        </View>

        {/* Konten BUNGKUS Detail Booking */}
        <View style={{
          backgroundColor: '#f0f0f0',
          flex: 1,
          padding: 5,
          paddingTop: 20
        }}>

          {/* Isi Konten 1 */}
          <View style={{
            flexDirection: 'row',
            paddingBottom: 15
          }}>
            <View style={{
              flex: 2,
              paddingHorizontal: 3,
              alignItems: 'center'
            }}>

              {/* Komponen Calendar Visible  */}
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />

              <TouchableOpacity style={{ flexDirection: 'column' }}
                onPress={this.showDateTimePicker}
              >
                <Text style={{ color: '#000', paddingBottom: 13 }}>Tanggal Masuk</Text>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                  <Text style={{
                    color: '#000',
                    fontSize: 18,
                    fontWeight: 'bold',
                    borderBottomWidth: 1,
                    borderColor: '#000',
                    marginRight: 15,
                    paddingBottom: 10
                  }}>
                    18 April 2019
                  </Text>
                  <Icon name='calendar' size={16} color='#0476d9'></Icon>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{
              flex: 2,
              paddingHorizontal: 3,

            }}>
              <View style={{ flexDirection: 'column', marginRight: 20 }}>
                <Text style={{ color: '#000', paddingBottom: 0 }}>Durasi Kos (Bulan)</Text>
                <TextInput style={{
                  color: '#000',
                  fontSize: 18,
                  fontWeight: 'bold',
                  borderBottomWidth: 1,
                  borderColor: '#000',
                  marginRight: 15
                }} keyboardType='numeric'>
                </TextInput>
              </View>
            </View>
          </View>

          {/* Isi Konten 2 Separator  */}
          <View style={{
            marginHorizontal: 15,
            height: 100,
            flexDirection: 'row'
          }}>
            <View style={{
              flex: 1,
            }}>
              <Image source={{ uri: 'https://mamikos.com/general/img/pictures/share-image-default.jpg' }}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover'
                }}></Image>
            </View>
            <View style={{
              flex: 3,
              paddingHorizontal: 15,
              paddingVertical: 5,
              flexDirection: 'column'
            }}>
              {/* Title konten isi 2 */}
              <Text style={{
                fontSize: 15,
                fontWeight: '500',
                color: '#000'
              }}
              >
                {item.name} ( {item.type} )
              </Text>
              {/* Bungkusan Icon konten isi 2 */}
              <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row'
              }}>
                {item.bed ? <Icon name='bed' size={18} color='#0476d9'></Icon> : false}
                {item.wifi ? <Icon name='wifi' size={18} color='#0476d9' style={{ paddingLeft: 15 }}></Icon> : false}
                {item.wc ? <Icon name='toilet' size={18} color='#0476d9' style={{ paddingLeft: 15 }}></Icon> : false}
                {item.keyRoom ? <Icon name='key' size={18} color='#0476d9' style={{ paddingLeft: 15 }}></Icon> : false}
              </View>
              <Text style={{
                fontSize: 17,
                fontWeight: '500',
                color: '#000'
              }}
              >
                {(item.price != null) ? this.convertToRupiah(item.price) : false} / Bulan
              </Text>
            </View>
          </View>

          {/* End konten isi 2 */}
          <View style={{
            marginHorizontal: 15,
            paddingHorizontal: 10,
            paddingVertical: 10,
            flex: 1,
            flexDirection: 'column'
          }}>
            {/* Separator  */}
            <View style={{
              backgroundColor: '#000',
              borderColor: '#000',
              borderWidth: 0.3,
              marginHorizontal: 15,
              marginTop: 15,
              marginBottom: 10
            }}></View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}>
              <Text style={{
                fontSize: 17,
                fontWeight: '500',
                color: '#000'
              }}
              >Data Pemesan</Text>

            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3
            }}>
              <Text style={{
                fontSize: 17,
                color: '#000'
              }}
              >Nama Lengkap</Text>
              <Text style={{
                fontSize: 17,
                fontWeight: '200',
                color: '#000'
              }}
              >
                {this.state.userObj.name}
              </Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3
            }}>
              <Text style={{
                fontSize: 17,
                color: '#000'
              }}
              >Jenis Kelamin</Text>
              <Text style={{
                fontSize: 17,
                fontWeight: '200',
                color: '#000'
              }}
              >
                {this.state.userObj.gender}
              </Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3
            }}>
              <Text style={{
                fontSize: 17,
                color: '#000'
              }}
              >No Handphone</Text>
              <Text style={{
                fontSize: 17,
                fontWeight: '200',
                color: '#000'
              }}
              >
                {this.state.userObj.telp}
              </Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3,
              marginBottom: 5
            }}>
              <Text style={{
                fontSize: 17,
                color: '#000'
              }}
              >Pekerjaan</Text>
              <Text style={{
                fontSize: 17,
                fontWeight: '200',
                color: '#000'
              }}
              >{this.state.userObj.job}</Text>
            </View>

            {/* Separator  */}
            <View style={{
              backgroundColor: '#000',
              borderColor: '#000',
              borderWidth: 0.3,
              marginHorizontal: 15,
              marginTop: 15,
              marginBottom: 10
            }}></View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3,
              marginBottom: 5
            }}>
              <Checkbox
                status={isCheckedAgree ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ isCheckedAgree: !isCheckedAgree }); }}
              />
              <Text style={{
                fontSize: 14,
                fontWeight: '200',
                color: '#000',
                flex: 5
              }}
              >Saya menyetujui SYARAT KETENTUAN dan memastikan data diatas adalah Benar.</Text>
            </View>
            <View style={{

            }}>
              <Button title="Book"
                disabled={!isCheckedAgree}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 18,
                }}
                onPress={() => this.props.navigation.navigate('Wishlist')}
              >
              </Button>
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
  },

});