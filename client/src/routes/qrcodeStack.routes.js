import React from 'react'
import QrScreen from '../screens/qrcode';
import { createStackNavigator } from '@react-navigation/stack';

const qrStack = createStackNavigator();

export default function QrRoutes() {
    return (
        <qrStack.Navigator
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
            <qrStack.Screen name="QrScreen" component={QrScreen} />
        </qrStack.Navigator>
    )
}