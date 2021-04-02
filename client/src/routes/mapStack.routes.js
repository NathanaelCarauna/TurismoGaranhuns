import React from 'react'
import MapScreen from '../screens/mapScreen';
import { createStackNavigator } from '@react-navigation/stack';

const MapStack = createStackNavigator();

export default function MapRoutes(){
    return(
        <MapStack.Navigator>
            <MapStack.Screen name="MapScreen" component={MapScreen}/>
        </MapStack.Navigator>
    )
}