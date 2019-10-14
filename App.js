import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/HomePage';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';


import Attendance from './src/screens/HomePage/Attendance';
import SignUp from './src/screens/Authentication/SignUp';
import Login from './src/screens/Authentication/Login';

export default class App extends React.Component {
  render() {

    return (
      <AppContainer/>
    );
  }
}

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Attendance: {
    screen: Attendance,
    navigationOptions: {
      header: null
    }
  }
})

const AppSwitch = createSwitchNavigator({
  SignUp: SignUp,
  Login: Login,
  App: AppStack
})

const AppContainer = createAppContainer(AppSwitch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
