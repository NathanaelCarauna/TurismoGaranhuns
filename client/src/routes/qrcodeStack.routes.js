import React from 'react'
import QrScreen from '../screens/qrcode';
import { createStackNavigator } from '@react-navigation/stack';
import MenuLateralIcon from '../components/MenuLateralIcon';
import HeaderRightSide from '../components/HeaderRightSide';

const qrStack = createStackNavigator();

export default function QrRoutes({ navigation}) {
    const handleDrawer = ()=>{
        navigation.openDrawer();
    }
    return (
        <qrStack.Navigator
            screenOptions={{            
                headerLeft: () => <MenuLateralIcon func={handleDrawer}/>,
                headerRight: () => <HeaderRightSide/>,
                headerStyle: {
                    backgroundColor: "#213967",
                    height: 70,
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