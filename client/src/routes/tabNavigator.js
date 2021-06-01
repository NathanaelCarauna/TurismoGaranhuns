import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import QrRoutes from './qrcodeStack.routes'
import MapRoutes from './mapStack.routes'
import StampRoutes from './stampsStack.routes'
import MainRoutes from './appStack.routes'
import { Image } from 'react-native';
const tab = createBottomTabNavigator();

const bottomTabNavigator = () => {
    return (
        <tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if(route.name === 'HOME'){
                        iconName = focused
                        ? 'md-home'
                        : 'md-home-outline'
                    }
                    else if(route.name === 'QR CODE'){
                        iconName = focused
                        ? 'qr-code'
                        : 'qr-code-outline'
                    }
                    else if(route.name === 'MAPA'){
                        iconName = focused
                        ? 'md-map'
                        : 'md-map-outline'
                    }
                    else if(route.name === 'SELOS'){
                        iconName = focused
                        ? 'trophy'
                        : 'trophy-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
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