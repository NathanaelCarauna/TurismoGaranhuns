import React from 'react'
import Home from '../screens/home';
import EditUsuario from '../screens/editUsuario';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

export default function AppRoutes() {
    return (
    <AppStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#213967",
                height: 60,
            },
            headerTintColor: "white",
            headerBackTitle: "Back",
            headerTitle: '',            
        }}
    >
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="EditUsuario" component={EditUsuario}/>
    </AppStack.Navigator>
)}