import React, { Component } from 'react'
import { createStackNavigator, createSwitchNavigator} from "react-navigation";

import PrivateNav from '../navigation/PrivateNav';
import ClassHome from '../screen/Home';
import ClassListKos from '../screen/ClassListKos';
import ClassDetailKos from '../screen/ClassDetailKos';
import ClassIklanTambah from '../screen/ClassIklanTambah';
import ClassDetailBooking from '../screen/ClassDetailBooking';

const SwitchClassIklanTambah = createSwitchNavigator({
  SWIklanTambah:ClassIklanTambah,
  SWClassListKos: ClassListKos
})
const StackPrivate = createStackNavigator({
  PrivateNav: PrivateNav,
  ClassHome: ClassHome,
  ClassListKos: ClassListKos,
  ClassDetailKos: ClassDetailKos,
  ClassIklanTambah:SwitchClassIklanTambah,
  ClassDetailBooking: ClassDetailBooking,
}, {
    initialRouteName: "PrivateNav",
    headerMode: 'none'
  });


//export default App;
export default StackPrivate;