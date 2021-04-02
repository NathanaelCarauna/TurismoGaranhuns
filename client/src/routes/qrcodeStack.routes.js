import React from 'react'
import QrScreen from '../screens/qrcode';
import { createStackNavigator } from '@react-navigation/stack';

const qrStack = createStackNavigator();

export default function QrRoutes(){
    return(
        <qrStack.Navigator>
            <qrStack.Screen name="QrScreen" component={QrScreen}/>
        </qrStack.Navigator>
    )
}