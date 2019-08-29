import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,TouchableOpacity,
  ScrollView
} from 'react-native';
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';

import CompHeader from '../component/CompHeader';

class Profile extends React.Component {
  state = {
    userObj : []
  }
  constructor(props){
    super();
    this.getObjUser();
  }
  getObjUser = async () => {
    try {
      const fetchDataUserJSON = await AsyncStorage.getItem('userObj');
      const userObj = JSON.parse(fetchDataUserJSON);
      await this.setState({
        userObj
      })
    } catch (e) {}
  }
  _logoutAsync = async () => {
    try {
      await AsyncStorage.clear()
      this.props.navigation.navigate('PublicStack')
    } catch (e) { }
  };

  render() {
    return (
      <View style={[styles.container]}>
        <CompHeader />
        <ScrollView>
          <View style={{
            backgroundColor: '#0476d9',
            flex: 1,
            position: 'relative',
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            paddingBottom: 10,
            paddingTop: 125,
            elevation: 10
          }}>
            <View style={{
              position: 'absolute',
              marginTop: 75,
              left: '50%',
              marginLeft: -50,
              width: 100,
              height: 100,
              borderRadius: 25,
              backgroundColor: '#0476d9',
              borderColor: '#fff',
              borderWidth: 3
            }}>
              <Image source={require('../assets/dummy.jpg')} style={{ width: '100%', height: '100%', borderRadius: 25 }}></Image>
            </View>
          </View>
          <View style={{
            flex: 3,
            alignItems: 'center',
            marginBottom:15
          }}>
            <View style={[styles.cardSimpleContainerHead, {
              marginTop: 50,
              width: '90%',
              marginHorizontal: 20,
              height: 75,
              borderRadius: 25,
              padding: 10,
              alignItems: 'center'
            }]}>
              <Text style={{
                fontSize: 16,
                fontWeight: '200',
                color: '#000',
                textAlign:'center'
              }}>Selamat Datang, {this.state.userObj.name}</Text>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000'
              }}>{this.state.userObj.telp}</Text>
            </View>
            <TouchableOpacity style={[styles.cardSimpleContainerHead, {
              marginTop: 15,
              width: '90%',
              marginHorizontal: 20,
              height: 50,
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              justifyContent:'flex-start',
              flexDirection:'row'
            }]}>
              <Icon name='user-circle' size={20} color='#0476d9' style={{marginRight:10}}></Icon>
              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000'
              }}>Profil Saya</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cardSimpleContainerHead, {
              marginTop: 15,
              width: '90%',
              marginHorizontal: 20,
              height: 50,
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              justifyContent:'flex-start',
              flexDirection:'row'
            }]}>
              <Icon name='tasks' size={20} color='#0476d9' style={{marginRight:10}}></Icon>
              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000'
              }}>Iklan Saya</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cardSimpleContainerHead, {
              marginTop: 15,
              width: '90%',
              marginHorizontal: 20,
              height: 50,
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              justifyContent:'flex-start',
              flexDirection:'row'
            }]}>
              <IconMaterial name='info' size={20} color='#0476d9' style={{marginRight:10}}></IconMaterial>
              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000'
              }}>Syarat dan Ketentuan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cardSimpleContainerHead, {
              marginTop: 15,
              width: '90%',
              marginHorizontal: 20,
              height: 50,
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              justifyContent:'flex-start',
              flexDirection:'row'
            }]}
            onPress={()=> this._logoutAsync()}
            >
              <Icon name='power-off' size={20} color='#0476d9' style={{marginRight:10}}></Icon>
              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000'
              }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  cardSimpleContainerHead: {
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: '#ffffff',
    elevation: 3
  }
});
export default Profile;