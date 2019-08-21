import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import PublicNav from '../navigation/PublicNav';
import ClassLogin from '../screenPublic/Login';
import ClassRegister from '../screenPublic/Register';
import PrivateStack from './PrivateStack';

//Tambahan
import ClassHome from '../screen/Home';
import ClassListKos from '../screen/ClassListKos';
import ClassDetailKos from '../screen/ClassDetailKos';
import ClassIklanTambah from '../screen/ClassIklanTambah';
import ClassDetailBooking from '../screen/ClassDetailBooking';


const StackPublic = createStackNavigator({
  PublicNav:PublicNav,
  ClassLogin: ClassLogin,
  ClassRegister: ClassRegister,

  //Tambahan Navigate (Supaya Navbar Tidak Nimpah Ke Private)
  ClassHomePublic: ClassHome,
  ClassListKosPublic: ClassListKos,
  ClassDetailKosPublic: ClassDetailKos,
  ClassIklanTambahPublic: ClassIklanTambah,
  ClassDetailBookingPublic: ClassDetailBooking
}, {
    initialRouteName: "PublicNav",
    headerMode: 'none'
  });


class PublicStack extends Component {
  render() {
    return (
      <ContainerPublic />
    );
  }
}
//export default App;
export default StackPublic;