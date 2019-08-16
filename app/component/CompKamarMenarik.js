import React, { Component } from 'react';
import { Card, TextInput, Avatar, Button, Title, Paragraph, Appbar, Searchbar, IconButton } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
class CampKamarMenarik extends Component {
  render() {
    return (
      <View style={[styles.cardSimpleContainer, { position: 'relative', width: 200, height: 250, backgroundColor: '#fff', flexDirection: 'column', paddingVertical: 5, paddingHorizontal: 5 }]}>
        <Text style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 17,
          color: 'green'
        }}>Ada 3 Kamar</Text>
        <TouchableOpacity style={{
          flex: 4,
          height: '50%',
          width: '100%'
        }}>
          <Image source={{ uri: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/03/wisata-kota-bandung.jpg' }}
            style={{
              flex: 4,
              height: '50%',
              width: '100%'
            }}
          />
        </TouchableOpacity>
        <View style={[{ flex: 1, backgroundColor: '#fff' }]}>
          <Text style={{
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold'
          }}>Rp. 1.250.000</Text>
          <Text style={{
            textAlign: 'center'
          }}>PUTRI</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
}
);

export default CampKamarMenarik;