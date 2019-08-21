import React, { Component } from "react";
import { Button } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";


//List PropsNya
// paramNavigate = Navigate ke CLassDetailKos
// item = list ItemNya
class CompListKos extends Component {

  render() {
    return (
      <View style={{ padding: 15, paddingBottom: 20 }}>
        <TouchableOpacity onPress={this.props.paramNavigate}>
          <View style={{ position: 'relative', paddingBottom: 10 }}>
            <Image source={this.props.dataItem.photo}
              style={{
                height: 125,
                width: '100%',
                borderRadius: 7,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
              }} />
          </View>
        </TouchableOpacity>
        <View>
          <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
            <Text style={{ color: 'red' }}>
              {this.props.dataItem.type}
            </Text>
            <Text> - </Text>
            <Text style={{ color: 'green' }}>
              Ada {this.props.dataItem.room} Kamar
            </Text>
            <Text> - </Text>
            <Text>{this.props.dataItem.city}</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Rp. {this.props.dataItem.price} / Bulan</Text>
            <Text style={{ color: 'grey' }}> - </Text>
            <Text style={{ color: '#000' }}>
              {this.props.dataItem.isPromo ? 'Ada Promo' : 'Tidak ada Promo'}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', }}>
              {this.props.dataItem.name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#0476d9', padding: 4, borderRadius: 5 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Bisa Booking</Text>
            </View>
          </View>
          <View style={{ marginTop: 3 }} />
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
  }
});

export default CompListKos;

