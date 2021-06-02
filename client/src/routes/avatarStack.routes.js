import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Avatar from '../screens/avatar';
import MenuLateralIcon from '../components/MenuLateralIcon';
import HeaderRightSide from '../components/HeaderRightSide';

const AvatarStack = createStackNavigator();

export default ({ navigation}) => {
    const handleDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <AvatarStack.Navigator
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
            <AvatarStack.Screen name="Avatar" component={Avatar} />
        </AvatarStack.Navigator>
    )
}