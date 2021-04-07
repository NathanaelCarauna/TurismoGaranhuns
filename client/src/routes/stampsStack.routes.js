import React from 'react'
import StampsScreen from '../screens/stamps';
import { createStackNavigator } from '@react-navigation/stack';

const StampStack = createStackNavigator();

export default function MapRoutes() {
    return (
        <StampStack.Navigator
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
            <StampStack.Screen name="StampScreen" component={StampsScreen} />
        </StampStack.Navigator>
    )
}