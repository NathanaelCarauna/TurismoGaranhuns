import React from 'react'
import MapScreen from '../screens/mapScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MenuLateralIcon from '../components/MenuLateralIcon';
import HeaderRightSide from '../components/HeaderRightSide';

const MapStack = createStackNavigator();

export default function MapRoutes({ navigation}) {
    const handleDrawer = ()=>{
        navigation.openDrawer();
    }
    return (
        <MapStack.Navigator
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
            <MapStack.Screen name="MapScreen" component={MapScreen} />
        </MapStack.Navigator>
    )
}