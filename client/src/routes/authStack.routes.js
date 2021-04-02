import React from 'react'
import Login from '../screens/login';
import Start from '../screens/start';
import Cadastro from '../screens/cadastro';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
    <AuthStack.Navigator
        headerMode='none'
        >        
        <AuthStack.Screen name="Start" component={Start}/>
        <AuthStack.Screen name="Login" component={Login}/>
        <AuthStack.Screen name="Cadastro" component={Cadastro}/>
    </AuthStack.Navigator>
)}



  