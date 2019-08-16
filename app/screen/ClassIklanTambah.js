import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Appbar, Button, Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tabs, Tab, TabHeading } from 'native-base';

import CompMaps from '../component/CompMaps';
import CompTextInput from '../component/CompTextInputIklan';

class ClassIklanTambah extends Component {
  static navigationOptions = {
    title: 'Kosyu',
    header: null,
    headerStyle: {
      backgroundColor: '#00BFFF',
    },
    headerTintColor: '#2d3c4d',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };
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
          }}>KosCube</Text>
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
            <CompTextInput textLabel='Nama Kos' placeholder='Masukan Nama Kos Disini' />
            <CompTextInput textLabel='Pemilik Kos' placeholder='Masukan Nama Pemilik Kos' />
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
              <CompMaps />
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
                    fontSize: 20,
                    color: '#000'
                  }}
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder='Latitude'
                    underlineColorAndroid='#303f9f'
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
                    fontSize: 20,
                    color: '#000'
                  }}
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder='Longitude'
                    underlineColorAndroid='#303f9f'
                  />
                </View>
              </View>
            </View>
            <CompTextInput textLabel='No HP' placeholder='Masukan No HP / Telp ' />
            <CompTextInput textLabel='Pengelola Kos' placeholder='Masukan Nama Pengelola Kos' />
            <Button mode='contained' style={{
              backgroundColor: '#0476d9'
            }} onPress={() => alert('Submit Data Ya')}>
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