import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/Home";
import DetailsScreen from './screens/Details';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Stack=createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
    headerShown:false
  },
},
  Details:{screen:DetailsScreen},
},
{initialRouteName:"Home"})

const AppContainer=createAppContainer(Stack)

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

