import React, { Component } from "react";
import { TextInput, Avatar, Button, Paragraph, Appbar, Searchbar, IconButton, ActivityIndicator } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Left, Body, Right, Title, Subtitle, Tabs, Tab, TabHeading, Item, IconNB, Input } from 'native-base';
import Modal from "react-native-modal";
import axios from 'axios';

import CompListKost from '../component/CompListKos';
import CompMaps from '../component/CompMaps';
import { FlatList } from "react-native-gesture-handler";
import MapView, { Marker } from 'react-native-maps';
import ActionSheet from 'react-native-actionsheet'

import VarGlobal from '../environtment/VarGlobal'

import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { getKost,sortKos } from '../_actions/ListKos'

class ClassListKos extends Component {
  constructor() {
    super();
    this.state = {
      isListKos: false,
      udahLogin: false,
      tokenNya: '',
      noPage: 0,
      dataItem: '',
      isModalVisible: false
    };
  }
  componentDidMount() {
    this._cekLogin();
    this.props.dispatch(getKost())
    // this.__ambilDataMentah();
  }
  _cekLogin = async () => {
    const fetchDataMentah = await AsyncStorage.getItem('userToken');
    if (fetchDataMentah) {
      await this.setState({
        udahLogin: true,
        tokenNya: fetchDataMentah
      })
    } else {
      await this.setState({
        udahLogin: false
      })
    }
  }
  __ambilDataMentah = async () => {
    // const token = await AsyncStorage.getItem('userToken');
    // let responNya = await axios.get(VarGlobal.host + '/dorms')
    // this.setState({
    //   dataItem:responNya.data
    // })
    // await this.props.dispatch(getKost())
  }
  showActionSheet = () => {
    this.ActionSheet.show()
  }
  sortingAksi = (index) => {
    switch (index) {
      case 0:
        this.props.dispatch(sortKos('price', 'desc'))
        break;
      case 1:
        this.props.dispatch(sortKos('price', 'asc'))
        break;
      case 2:
        this.props.dispatch(sortKos('type', 'desc'))
        break;
      case 3:
        this.props.dispatch(sortKos('type', 'asc'))
        break;
      default:
        break;
    }
  }
  _aturHead = (noTab) => {
    if (noTab == 0) {
      return (
        // Header Tab Maps (Dari ListKost)
        <View style={[stylesHead.cardSimpleContainer, {
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
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>
          <View style={{ marginVertical: 5, marginHorizontal: 5, flex: 1, position: 'relative' }}
          >
            <TextInput placeholderTextColor='#fff' placeholder='Masukan Kota' selectionColor='#000' style={{
              backgroundColor: '#0476d9',
              marginLeft: 35,
              color: '#fff',
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontSize: 16
            }}
              theme={{ colors: { text: '#fff' } }}
            ></TextInput>
            <Icon name="search" size={25} color="#fff" style={{ position: 'absolute', left: 10, top: 12 }} />
          </View>
          <Icon name='cube' size={30} color='#fff' />
        </View>
      )
    } else {
      return (
        // Header Tab Maps (Dari ListKost)
        <View style={[stylesHead.cardSimpleContainer, {
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
      )
    }
  }
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    });
  };
  _showModal = () => {
    return (
      <View style={{
      }}>
        <Modal style={[stylesCari.cardSimpleContainer,
        {
          backgroundColor: '#fff',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: 15
        }]} isVisible={this.state.isModalVisible}
        >
          <Button mode='contained' style={{
            backgroundColor: '#0476d9',
            JustifyContent: 'flex-end'
          }} onPress={() => this.toggleModal()}>
            <Text style={{
              fontSize: 14,
              color: '#fff'
            }}>Close</Text>
          </Button>
        </Modal>
      </View>
    )
  }
  activateTab(noPageNya) {
    this.setState({
      noPage: noPageNya
    });
  }
  render() {
    let paramNavigateDetailKos = (itemNya) => {
      if (this.state.udahLogin) {
        this.props.navigation.navigate('ClassDetailKos', {
          itemNya
        })
      } else {
        this.props.navigation.navigate('ClassDetailKosPublic', {
          itemNya
        })
      }
    };
    return (
      <View style={{ flex: 1 }}>
        {this._aturHead(this.state.noPage)}
        <Tabs onChangeTab={({ i, ref, from }) => this.activateTab(i)}>
          <Tab heading={
            <TabHeading style={{ backgroundColor: '#0476d9' }}>
              <Icon name="list-alt" color='#fff' />
              <Text style={{ color: '#fff' }}> LIST KOS</Text>
            </TabHeading>
          }>
            <View style={{ flex: 1, position: 'relative', alignItems: 'center', backgroundColor: '#fafafa' }}>
              {/* <ScrollView style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                <View style={{ paddingBottom: 50 }}></View>
              </ScrollView> */}
              {this.props.ListKos.isLoading ?
                <ActivityIndicator size={50} style={{ flex: 1 }}>
                </ActivityIndicator>
                : false}
              <FlatList
                data={this.props.ListKos.dataItem}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <CompListKost paramNavigate={() => paramNavigateDetailKos(item)} dataItem={item} />
                )}
                ListFooterComponent={() => (
                  <View style={{ height: 50 }}></View>
                )}
                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
              />

              {/* Untuk Filter dan Sorting */}
              <View style={[stylesCari.cardSimpleContainer, {
                flexDirection: 'row',
                height: 50,
                width: '30%',
                backgroundColor: '#0476d9',
                position: 'absolute',
                left: '35%',
                right: 0,
                bottom: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }]}>
                <ActionSheet
                  ref={o => this.ActionSheet = o}
                  title={'Urutkan Berdasarkan'}
                  options={['Herga Termurah', 'Harga Termahal', 'Kos Putri', 'Kos Putra', 'Kos Campuran', 'Batal']}
                  cancelButtonIndex={5}
                  onPress={(index) => {
                    this.sortingAksi(index);
                  }}
                />
                <TouchableOpacity onPress={this.showActionSheet} >
                  <View style={{ flexDirection: 'row' }}>
                    <Icon name="sort" size={20} color='#fff' />
                    <Text style={{ color: '#fff' }}> Sorting</Text>
                  </View>
                </TouchableOpacity>
                {this._showModal()}
              </View>
            </View>
          </Tab>
          <Tab heading={
            <TabHeading style={{ backgroundColor: '#0476d9' }}>
              <Icon name="map" color='#fff' />
              <Text style={{ color: '#fff' }}> MAPS</Text>
            </TabHeading>
          } >
            <View style={{ backgroundColor: '#f0f0f0' }}>
              <CompMaps />
            </View>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const stylesCari = StyleSheet.create({
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
  }
});

const stylesHead = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: '#e6eefc'
  },
  cardSimpleContainerHead: {
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: '#303f9f',
    elevation: 2
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

const mapStateToProps = (state) => {
  return {
    ListKos: state.ListKos
  }
}

export default connect(mapStateToProps)(ClassListKos);