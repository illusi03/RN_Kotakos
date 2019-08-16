import React, { Component } from 'react'
import {View} from 'react-native'
import Slideshow from 'react-native-image-slider-show';
export default class ImageSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url: 'https://mamikos.com/info/wp-content/uploads/2017/08/1.jpg',
        }, {
          url: 'http://placeimg.com/640/480/any',
        }, {
          url: 'http://placeimg.com/640/200/any',
        },
      ],
    };
  }
  handlePromoTouch = (props) => {
    alert('tes')
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <View style={{padding:10}}>
        <Slideshow
          height={145}
          overlay={true}
          arrowSize={2}
          onPress={this.handlePromoTouch}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />
      </View>
    );
  }
}