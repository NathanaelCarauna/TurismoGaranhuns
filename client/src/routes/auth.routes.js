import React from 'react'
import Login from '../screens/login';
import Start from '../screens/start';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
    <AuthStack.Navigator>        
        <AuthStack.Screen name="Login" component={Login}/>
        <AuthStack.Screen name="Start" component={Start}/>
    </AuthStack.Navigator>
)}