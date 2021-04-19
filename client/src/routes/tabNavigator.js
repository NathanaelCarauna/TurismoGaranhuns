import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QrRoutes from './qrcodeStack.routes'
import MapRoutes from './mapStack.routes'
import StampRoutes from './stampsStack.routes'
import MainRoutes from './appStack.routes'
const tab = createBottomTabNavigator();

const bottomTabNavigator = () => {
    return (
        <tab.Navigator
            tabBarOptions={{ 
                activeBackgroundColor: 'white',
                activeTintColor: 'black',
                inactiveBackgroundColor: '#213967',
                inactiveTintColor: 'white',
                // tabStyle: {borderColor: 'white', }
             }}
        >
            <tab.Screen name="HOME" component={MainRoutes}/>
            <tab.Screen name="QR CODE" component={QrRoutes}/>
            <tab.Screen name="MAPA" component={MapRoutes}/>
            <tab.Screen name="SELOS" component={StampRoutes}/>
        </tab.Navigator>
    )
}

export default bottomTabNavigator;