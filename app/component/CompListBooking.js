import React, {Component} from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
import {Button} from 'react-native-paper'

export default class CompListBooking extends Component {
  render() {
    return (
      <View style={[
        styles.cardSimpleContainer, {
          backgroundColor: '#fff',
          flexDirection: 'row',
          height: 150,
          marginBottom: 10
        }]} >
        < View style={{
          flex: 1
        }
        }>
          <Image source={
            { uri: 'https://blog.mamikos.com/wp-content/uploads/2016/03/10-maret-2.png' }
          } style={{
            width: '100%',
            height: '100%'
          }}
          />
        </View >
        <View style={{
          flex: 2,
          marginVertical: 10,
          marginHorizontal: 15
        }}>
          <Text style={[styles.textContent, { fontWeight: 'bold' }]}>JUDUL KOS NYA</Text>
          <View style={{
            flexDirection: 'row',
            marginBottom: 20
          }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textContent}>Booking</Text>
              <Text style={styles.textContent}>14 April 2019</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textContent}>Durasi Sewa</Text>
              <Text style={styles.textContent}>1 Bulan</Text>
            </View>
          </View>
          <Button mode='outlined' style={{
            borderColor: '#0476d9',
            borderWidth: 3,
            borderRadius: 5
          }}
            onPress={() => alert('Ke Detail Kos Nya')}>
            <Text style={{
              color: '#0476d9',
              fontSize: 14,
              fontWeight: 'bold'
            }}>Tunggu Konfirmasi</Text>
          </Button>
        </View >
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
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
    borderRadius: 3,
    elevation: 5
  },
  textContent: {
    fontSize: 14,
    color: '#000'
  }
});