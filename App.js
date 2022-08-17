import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Routes from './src/routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#123456" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Welcome />
    //   <Message message="teste componente reutilizavel"/>
    //   <Login />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:'red'
  }
});
