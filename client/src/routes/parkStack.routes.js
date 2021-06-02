import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Parques from '../screens/Parques'

const ParkStack = createStackNavigator();

export default ({ navigation }) => {
    const handleDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <ParkStack.Navigator
            headerMode='none'                            
        >
            <ParkStack.Screen name="Parques" component={Parques}/>
        </ParkStack.Navigator>
    )
}