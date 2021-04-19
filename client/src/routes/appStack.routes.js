import React from 'react'
import Home from '../screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import Parques from '../screens/Parques';
import Pracas from '../screens/Pracas';
import Religao from '../screens/Religiao';

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
        <AppStack.Screen name="Parques" component={Parques}/>
        <AppStack.Screen name="Pracas" component={Pracas}/>
        <AppStack.Screen name="Religiao" component={Religao}/>
    </AppStack.Navigator>
)}