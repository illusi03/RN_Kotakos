import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import PublicNav from '../navigation/PublicNav';
import ClassAccount from '../screenPublic/Account';
import ClassRegister from '../screenPublic/Register';
import PrivateStack from './PrivateStack';

const StackPublic = createStackNavigator({
  PublicNav:PublicNav,
  ClassAccount: ClassAccount,
  ClassRegister: ClassRegister
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