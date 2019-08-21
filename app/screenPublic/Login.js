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
  FlatList,

} from "react-native";
import { Button } from 'react-native-paper'
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import VarGlobal from '../environtment/VarGlobal'

class ClassLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textUsername: '',
      textPass: '',
      userToken: '',
      tempUserFetch: ''
    }
  }
  seleksiLogin = async () => {
    try {
      //Fetch Data USERNAME dan PASSWORD API , LALU PENGECEKAN , JIKA MATCH BERI TOKEN
      let tempUser = {
        username: this.state.textUsername,
        password: this.state.textPass
      }
      await axios.post(VarGlobal.host+"/login",tempUser)
        .then((response) => {
          if (typeof response.data.token !== 'undefined') {
            AsyncStorage.setItem('userToken', response.data.token);
            this.props.navigation.navigate('PrivateStack')
          } else {
            alert('Gagal Login')
          }
        })
        .catch((error) => {
          alert(error)
        });
    }
    catch (e) { }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 35,
          }}>
            <Image source={require('../assets/illustrator/login.png')} style={{
              width: 150,
              height: 175,
              resizeMode: 'stretch'
            }}></Image>
            <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#0476d9',
              textAlign: 'center',
              paddingHorizontal: 50,
              marginBottom: 25
            }}>Silakan Login Untuk Menikmati Fitur Fitur Yang Lebih Lengkap</Text>
          </View>

          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: 250,
              marginBottom: 25
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
                placeholder='Masukan Username Disini'
                onChangeText={(textUsername)=> this.setState({textUsername})}
              ></TextInput>
            </View>
            <View style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: 250
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
                placeholder='Masukan Password Disini'
                onChangeText={(textPass)=> this.setState({textPass})}
              ></TextInput>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <Button mode='contained' style={{
                backgroundColor: '#0476d9',
                marginVertical: 20,
                marginHorizontal: 20,
                width: 125
              }}
                onPress={() => this.seleksiLogin()}
              >
                <Text>Login</Text>
              </Button>
              <Button mode='contained' style={{
                backgroundColor: '#0476d9',
                marginVertical: 20,
                marginHorizontal: 20,
                width: 125
              }}
                onPress={() => this.props.navigation.navigate('ClassRegister')}
              >
                <Text>Register</Text>
              </Button>
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
export default ClassLogin;
