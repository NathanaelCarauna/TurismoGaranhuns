import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Missions from '../screens/missions'
import HeaderRightSide from '../components/HeaderRightSide';
import MenuLateralIcon from '../components/MenuLateralIcon';

const MissionsStack = createStackNavigator();

export default ({ navigation }) => {
    const handleDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <MissionsStack.Navigator
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
            <MissionsStack.Screen name="Missions" component={Missions}/>
        </MissionsStack.Navigator>
    )
}