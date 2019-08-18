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
class CompKotaPopuler extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert('tess')}>
        <View style={[styles.cardSimpleContainer, styles.itemKolom, { margin: 0, height: 150, width: 100, borderRadius: 15 }]}>
          <Image source={this.props.dataItem.uriImage} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 5, resizeMode: 'stretch' }} />
          <Text style={{ borderColor:'blue', color: '#fff', position: 'absolute', bottom: 10, left: 10, fontSize: 15, fontWeight: 'bold' }}>
            {this.props.dataItem.namaKota}
          </Text>
        </View>
      </TouchableOpacity>
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

export default CompKotaPopuler;