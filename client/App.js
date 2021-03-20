import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { } from 'react-native';
import Home from './screens/login';
import {createStackNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import Start from './screens/start';
import { render } from 'react-dom';
import Login from '.screens/login';

const Stack = createStackNavigator();
export default function App() {  
  render()
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Start"
        component={start}/>
        <Stack.Screen
        name= "Login"
        component={login}/>
      </Stack.Navigator>
    </NavigationContainer>
        
  )
}
