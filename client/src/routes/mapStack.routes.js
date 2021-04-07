import React from 'react'
import MapScreen from '../screens/mapScreen';
import { createStackNavigator } from '@react-navigation/stack';

const MapStack = createStackNavigator();

export default function MapRoutes() {
    return (
        <MapStack.Navigator
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
            <MapStack.Screen name="MapScreen" component={MapScreen} />
        </MapStack.Navigator>
    )
}