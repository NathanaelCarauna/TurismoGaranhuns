import 'react-native-gesture-handler'
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from './src/routes'
import {AuthProvider} from './src/contexts/auth';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>      
    </NavigationContainer>
  );
}