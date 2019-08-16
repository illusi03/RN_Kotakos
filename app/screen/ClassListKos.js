import React, { Component } from "react";
import { TextInput, Avatar, Button, Paragraph, Appbar, Searchbar, IconButton } from 'react-native-paper';
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
import { Container, Header, Left, Body, Right, Title, Subtitle, Tabs, Tab, TabHeading } from 'native-base';
import Modal from "react-native-modal";

import CompListKost from '../component/CompListKos';
import CompMaps from '../component/CompMaps';
import { FlatList } from "react-native-gesture-handler";

class ClassListKos extends Component {
  constructor() {
    let dataList = [
      {
        idNya: '1', title: 'Baru'
      }, {
        idNya: '2', title: 'Baru Dua'
      }
    ];
    super();
    this.state = {
      isListKos: false,
      judul: 'List Data [MAP]',
      noPage: 0,
      dataItem: [{
        idNya: '1', title: 'Baru'
      }, {
        idNya: '2', title: 'Baru Dua'
      }],
      isModalVisible: false
    };
  }

  _aturHead = (noTab) => {
    if (noTab == 0) {
      return (
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
          <TextInput placeholder='Pencarian Berdasarkan Kota'
            style={{
              borderRadius: 9,
              position: 'relative',
              width: '100%',
              justifyContent: 'center',
              paddingLeft: 35
            }}>
          </TextInput>
          <Icon name="search" size={30} color="#303f9f" style={{
            position: 'absolute',
            top: 10,
            left: 20
          }} />
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
          }}>KosCube</Text>
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
          backgroundColor:'#fff',
          borderRadius:10,
          alignItems:'center',
          justifyContent:'flex-end',
          padding:15
        }]} isVisible={this.state.isModalVisible}
        >
          <Button mode='contained' style={{
            backgroundColor:'#0476d9',
            JustifyContent:'flex-end'
          }} onPress={() => this.toggleModal()}>
            <Text style={{
              fontSize:14,
              color:'#fff'
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
    let paramNavigateDetailKos = () => {
      this.props.navigation.navigate('ClassDetailKos')
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

              <FlatList
                data={this.state.dataItem}
                keyExtractor={(item) => item.idNya}
                renderItem={({ item }) => (
                  <CompListKost paramNavigate={paramNavigateDetailKos} dataItem={item.key} />
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

                <TouchableOpacity onPress={() => this.toggleModal()}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon name="sort" size={20} color='#fff' />
                    <Text style={{ color: '#fff' }}> SORTING</Text>
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
  cardSimpleContainer : {
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

export default ClassListKos;