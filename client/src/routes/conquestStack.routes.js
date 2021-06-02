import React from 'react';
import Conquistas from '../screens/conquistas';
import {createStackNavigator} from '@react-navigation/stack';
import MenuLateralIcon from '../components/MenuLateralIcon';
import HeaderRightSide from '../components/HeaderRightSide';

const ConquestStack = createStackNavigator();

export default ({navigation}) => {
    const handleDrawer = ()=>{
        navigation.openDrawer();
    }
    return(
        <ConquestStack.Navigator
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
            <ConquestStack.Screen name="EditUser" component={Conquistas}/>
        </ConquestStack.Navigator>
    )
}