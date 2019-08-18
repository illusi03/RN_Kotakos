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

export default class ClassRegister extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {/* Header KosCube */}
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
          }}>KosCube</Text>
          <Icon name='cube' size={30} color='#fff' />
        </View>

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
                backgroundColor: '#f8f8f8',
                width: '100%'
              }}
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
                backgroundColor: '#f8f8f8',
                width: '100%'
              }}
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
                backgroundColor: '#f8f8f8',
                width: '100%'
              }}
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
                backgroundColor: '#f8f8f8',
                width: '100%'
              }}
                placeholder='Masukan No HP Disini'
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
                onPress={() => alert('Mengirim Data Nya')}
              >
                <Text>Register</Text>
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