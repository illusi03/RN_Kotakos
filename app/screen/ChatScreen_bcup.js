import React from 'react';
import { SafeAreaView } from 'react-native';
import FlatListDemo from '../component/SearchableFlatlist';
import ChatInside from '../screen/Chat'
import { createStackNavigator, createAppContainer } from 'react-navigation';



class ChatScreen extends React.Component {
    static navigationOptions = {
      title: 'Chat',
    };
    render() {
        return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <FlatListDemo goto={() => this.props.navigation.navigate('ChatRoom')}/>
        </SafeAreaView>
        )
    }}
    const ChatStack = createStackNavigator({
        ChatHome: {
          screen: ChatScreen,
          
        },ChatRoom : {
          screen : ChatInside ,
        }  
      })
      
export default createAppContainer(ChatStack)