import React from 'react'
import StampsScreen from '../screens/stamps';
import { createStackNavigator } from '@react-navigation/stack';

const StampStack = createStackNavigator();

export default function MapRoutes(){
    return(
        <StampStack.Navigator>
            <StampStack.Screen name="StampScreen" component={StampsScreen}/>
        </StampStack.Navigator>
    )
}