import 'react-native-gesture-handler'
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
<<<<<<< HEAD
import Start from "./screens/start";
import Login from "./screens/login";
import Cadastro from "./screens/cadastro";
import Home from "./screens/home";
//import logo from "./assets/logo.png";
=======
import Routes from './src/routes'
import {AuthProvider} from './src/contexts/auth';
>>>>>>> f73eda4dcf78e0dd0d9179ddf51b0abf556b790a

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
=======
      <AuthProvider>
        <Routes/>
      </AuthProvider>      
>>>>>>> f73eda4dcf78e0dd0d9179ddf51b0abf556b790a
    </NavigationContainer>
  );
}
