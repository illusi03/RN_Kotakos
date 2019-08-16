import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import RegisterForm from '../component/RegisterForm'
import ProfileScreen from './Profile'
import LoginSultanForm from './LoginSultanForm'

class LoginPrimary extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    title: 'User',
  };
  constructor(props) {
    super(props)
    this.state = {
      email: 'default',
      password: '',
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/people/ultraviolet/50/3498db' }} />
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Profile')}>
          <Text style={styles.loginText}>Login </Text>
        </TouchableHighlight>
        <View style={styles.atas}>
          <Button style={styles.button} onPress={() => this.props.navigation.navigate('Register')} title="Register" />
        </View>
        <View>
          <Button style={styles.button} onPress={() => this.props.navigation.navigate('LoginSultan')} title="Login as Pemilik Kos" />
        </View>

      </View>

    )
  }
}

const LoginStack = createStackNavigator({
  LoginAwal: {
    screen: LoginPrimary,
    navigationOptions: {
      headerTitle: 'User',
      headerLayoutPreset: 'center',
    },
  }, Register: {
    screen: RegisterForm,
    navigationOptions: {
      headerTitle: 'Register'
    },
  },
  LoginSultan: {
    screen: LoginSultanForm,
    navigationOptions: {
      headerTitle: 'Login'
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Profile',
    }
  }
})

export default createAppContainer(LoginStack)
const styles = StyleSheet.create({
  atas: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,


  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 40,

  },
  loginText: {
    color: 'white',
  }
});