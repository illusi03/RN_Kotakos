import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';
import {Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class FlatListDemo extends Component {

  state = {
    users: [
      {
        name: "Griffith",
        email: "Maecenas@nisiMauris.edu",
        avatar: require('../assets/avatar/1.jpg')
      },
      {
        name: 'Vladimir',
        email: "amet.risus@Donecvitaeerat.edu",
        avatar: require('../assets/avatar/2.jpg')	},
      {
        name: "Jared",
        email: "Sed@mi.ca",
        avatar: require('../assets/avatar/3.jpg')},
      {
        name: "Dominic",
        email: "aliquet.libero.Integer@ullamcorperDuisat.org",
        avatar: require('../assets/avatar/4.jpg')},
      {
        name: "Edward",
        email: "ligula@SuspendissesagittisNullam.edu",
        avatar: require('../assets/avatar/5.jpg')
    
      },
      {
        name: "Omar",
        email: "neque.Sed.eget@molestiein.edu",
        avatar: require('../assets/avatar/6.jpg')},
      {
        name: "Gareth",
        email: "Aliquam.gravida@urnanecluctus.net",
        avatar: require('../assets/avatar/7.jpg')
      },
      {
        name: "Solomon",
        email: "turpis@enimCurabiturmassa.ca",
        avatar: require('../assets/avatar/8.jpg')
      },
      {
        name: "Shad",
        email: "ipsum.cursus@tellusjustosit.org",
        avatar: require('../assets/avatar/9.jpg')
      },
      {
        name: "Ferdinand",
        email: "ipsum.primis.in@Quisqueimperdieterat.ca",
        avatar: require('../assets/avatar/10.jpg')
      },
      {
        name: "August",
        email: "commodo.tincidunt@vulputate.co.uk",
        avatar: require('../assets/avatar/11.jpg')
      },
      {
        name: "Leo",
        email: "quis.pede.Praesent@feugiat.com",
        avatar: require('../assets/avatar/12.jpg')},
      {
        name: "Colton",
        email: "laoreet@pedePraesent.co.uk",
        avatar: require('../assets/avatar/13.jpg')	},
      {
        name: "Gray",
        email: "Integer.vitae.nibh@In.ca",
        avatar: require('../assets/avatar/14.jpg')	},
      {
        name: "Ignatius",
        email: "euismod@enimEtiam.net",
        avatar: require('../assets/avatar/15.jpg')	},
      {
        name: "Lester",
        email: "Nam@purus.edu",
        avatar: require('../assets/avatar/16.jpg')
      },
      {
        name: "Neil",
        email: "cursus.diam.at@dolorsit.ca",
        avatar: require('../assets/avatar/17.jpg')	},
      {
        name: "Marshall",
        email: "non.leo.Vivamus@mieleifend.ca",
        avatar: require('../assets/avatar/18.jpg')	},
      {
        name: "Solomon",
        email: "et@Suspendissecommodo.ca",
        avatar: require('../assets/avatar/19.jpg')	},
      {
        name: "Melvin",
        email: "at.pretium.aliquet@neceleifend.edu",
        avatar: require('../assets/avatar/20.jpg')	}
    ]
  }




  render() {
    return (
      <View style={styles.container} >
          <FlatList 
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <Card >
            <View style={styles.flatview}>
              <Image style={{width: 50, height: 50}}
              source={item.avatar }/>
              <View style={styles.chatmessage}>
              <Text style={styles.name}  onPress={this.props.goto}>{item.name}</Text>
              <Text >Message here ...</Text>
              </View>              
              <Button style={styles.delete}
              icon={
              <Icon 
              name="trash"
              size={15}
              color="black"
              />}
              />
              </View>
          </Card>

          }
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'flex-end',
    paddingTop: 0,
    borderRadius: 2,
    flexDirection : "row",
    marginLeft: 20

  },
  name: {
    marginTop : 3,
    fontFamily: 'Verdana',
    fontSize: 18,
    alignItems:"center",
       
  },
  delete : {
    paddingTop:5, 
  },
  email: {
    color: 'red'
  },
  chatmessage : {
    marginRight: 150,
    marginLeft: 30
  }
  

  

  
  
});