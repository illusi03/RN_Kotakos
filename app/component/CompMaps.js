import React from 'react'
import MapView from 'react-native-maps';

class CompMaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 24.92009056750823,
        longitude: 67.1012272143364,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      marker: null
    }
  }
  addMarker(coordinates) {
    this.setState({
      markers: [...this.state.markers,
      { latlng: coordinates }
      ]
    })
  }
  onMapPress(e) {
    alert("coordinates:" + JSON.stringify(e.nativeEvent.coordinate))
    this.setState({
      marker: [
        {
          coordinate: e.nativeEvent.coordinate
        },
      ],
    });
  }
  handleMarkerPress(event) {
    const markerID = event.nativeEvent.identifier
    alert(markerID)
  }
  render() {
    return (
      <MapView style={{
        width: '100%',
        height: '100%'
      }}
        region={this.state.region}
        onPress={(e) => this.setState({
          marker: e.nativeEvent.coordinate
        })}>
        {this.state.marker &&
          <MapView.Marker coordinate={this.state.marker} />}
      </MapView>
    );
  }
}
export default CompMaps;