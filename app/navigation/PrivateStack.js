import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import PrivateNav from '../navigation/PrivateNav';
import ClassHome from '../screen/Home';
import ClassListKos from '../screen/ClassListKos';
import ClassDetailKos from '../screen/ClassDetailKos';
import ClassIklanTambah from '../screen/ClassIklanTambah';
import ClassDetailBooking from '../screen/ClassDetailBooking';

const StackPrivate = createStackNavigator({
  PrivateNav: PrivateNav,
  ClassHome: ClassHome,
  ClassListKos: ClassListKos,
  ClassDetailKos: ClassDetailKos,
  ClassIklanTambah: ClassIklanTambah,
  ClassDetailBooking: ClassDetailBooking
}, {
    initialRouteName: "PrivateNav",
    headerMode: 'none'
  });

const ContainerPrivate = createAppContainer(StackPrivate);

class PrivateStack extends Component {
  render() {
    return (
      <ContainerPrivate />
    );
  }
}
//export default App;
export default PrivateStack;