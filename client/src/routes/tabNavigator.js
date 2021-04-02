import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QrRoutes from './qrcodeStack.routes'
import MapRoutes from './mapStack.routes'
import StampRoutes from './stampsStack.routes'
import MainRoutes from './appStack.routes'
const tab = createBottomTabNavigator();

const bottomTabNavigator = () => {
    return (
        <tab.Navigator>
            <tab.Screen name="MainRoutes" component={MainRoutes}/>
            <tab.Screen name="QrRoutes" component={QrRoutes}/>
            <tab.Screen name="MapRoutes" component={MapRoutes}/>
            <tab.Screen name="StampRoutes" component={StampRoutes}/>
        </tab.Navigator>
    )
}

export default bottomTabNavigator;