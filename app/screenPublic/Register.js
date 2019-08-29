import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import { Button } from 'react-native-paper'
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import VarGlobal from '../environtment/VarGlobal'

import AsyncStorage from '@react-native-community/async-storage';
import jwt from "react-native-pure-jwt";

export default class ClassRegister extends Component {

  state = {
    username: '',
    password: '',
    name: '',
    telp: '',
    job: ''
  }
  _aksiRegis = () => {
    this._aksiRegisAsync();
  }
  _aksiRegisAsync = async () => {
    try {
      //Fetch Data USERNAME dan PASSWORD API , LALU PENGECEKAN , JIKA MATCH BERI TOKEN
      let tempUser = {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        telp: this.state.telp,
        job: this.state.job
      }
      let bisaLogin = false;
      let objKosong;
      try {
        objKosong = await axios.post(VarGlobal.host + "/register", tempUser)
        bisaLogin = true
      } catch (e) { }

      if (bisaLogin) {
        try {
          await AsyncStorage.setItem('userToken', objKosong.data.token);
          const objJwt = await jwt.decode(
            objKosong.data.token, // the token
            'reactnative', // the secret
            {
              skipValidation: true // to skip signature and exp verification
            }
          );
          await AsyncStorage.setItem('userObj', JSON.stringify(objJwt.payload.userObj));
        } catch (e) {
          alert(e)
        }
        this.props.navigation.navigate('PrivateStack')
      } else {
        alert('Terjadi kesalahan (Field belum lengkap)')
      }
    }
    catch (e) { }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Header  */}
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
          <Text style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: 'bold'
          }}>KotaKos</Text>
          <Icon name='cube' size={30} color='#fff' />
        </View>
        <ScrollView>
          <View style={{
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
            <Image source={require('../assets/illustrator/register.png')} style={{
              width: 245,
              height: 175,
              resizeMode: 'stretch'
            }}></Image>
          </View>

          <View style={{
            flex: 1
          }}>
            {/* Form Regis */}
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: 250,
                marginBottom: 10
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '300',
                  color: '#000'
                }}>Username</Text>
                <TextInput style={{
                  borderBottomColor: '#000',
                  borderBottomWidth: 1,
                  backgroundColor: '#fff',
                  width: '100%'
                }}
                  onChangeText={(username) => this.setState({ username })}
                  placeholder='Masukan Username Disini'
                ></TextInput>
              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: 250,
                marginBottom: 10
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '300',
                  color: '#000'
                }}>Password</Text>
                <TextInput style={{
                  borderBottomColor: '#000',
                  borderBottomWidth: 1,
                  backgroundColor: '#fff',
                  width: '100%'
                }}
                  keyboardType='visible-password'
                  onChangeText={(password) => this.setState({ password })}
                  placeholder='Masukan Password Disini'
                ></TextInput>
              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: 250,
                marginBottom: 10
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '300',
                  color: '#000'
                }}>Nama Lengkap</Text>
                <TextInput style={{
                  borderBottomColor: '#000',
                  borderBottomWidth: 1,
                  backgroundColor: '#fff',
                  width: '100%'
                }}
                  onChangeText={(name) => this.setState({ name })}
                  placeholder='Masukan Nama Lengkap Disini'
                ></TextInput>
              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: 250,
                marginBottom: 10
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '300',
                  color: '#000'
                }}>No HP</Text>
                <TextInput style={{
                  borderBottomColor: '#000',
                  borderBottomWidth: 1,
                  backgroundColor: '#fff',
                  width: '100%'
                }}
                  keyboardType='numeric'
                  onChangeText={(telp) => this.setState({ telp })}
                  placeholder='Masukan No HP Disini'
                ></TextInput>
              </View>
              <View style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: 250,
                marginBottom: 10
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: '300',
                  color: '#000'
                }}>Pekerjaan</Text>
                <TextInput style={{
                  borderBottomColor: '#000',
                  borderBottomWidth: 1,
                  backgroundColor: '#fff',
                  width: '100%'
                }}
                  onChangeText={(job) => this.setState({ job })}
                  placeholder='Masukan Pekerjaan Disini'
                ></TextInput>
              </View>
              <View style={{
                flexDirection: 'row'
              }}>
                <Button mode='contained' style={{
                  backgroundColor: '#0476d9',
                  marginVertical: 20,
                  marginHorizontal: 20,
                  width: 200
                }}
                  onPress={this._aksiRegis}
                >
                  <Text>Register</Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
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
  }
});