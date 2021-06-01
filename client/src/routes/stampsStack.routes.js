import React from 'react'
import StampsScreen from '../screens/stamps';
import { createStackNavigator } from '@react-navigation/stack';
import MenuLateralIcon from '../components/MenuLateralIcon';
import HeaderRightSide from '../components/HeaderRightSide';

const StampStack = createStackNavigator();

export default function MapRoutes({ navigation}) {
    const handleDrawer = ()=>{
        navigation.openDrawer();
    }
    return (
        <StampStack.Navigator
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
            <StampStack.Screen name="StampScreen" component={StampsScreen} />
        </StampStack.Navigator>
    )
}