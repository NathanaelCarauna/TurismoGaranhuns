import React from 'react'
import Home from '../screens/home';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

export default function AppRoutes() {
    return (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home}/>
    </AppStack.Navigator>
)}