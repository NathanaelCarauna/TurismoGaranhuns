import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Config from '../screens/configuration'
import HeaderRightSide from '../components/HeaderRightSide';
import MenuLateralIcon from '../components/MenuLateralIcon';

const ConfigStack = createStackNavigator();

export default ({ navigation }) => {
    const handleDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <ConfigStack.Navigator
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
            <ConfigStack.Screen name="Missions" component={Config}/>
        </ConfigStack.Navigator>
    )
}