import React from 'react';
import editUsuario from '../screens/editUsuario';
import {createStackNavigator} from '@react-navigation/stack';
import MenuLateralIcon from '../components/MenuLateralIcon';
import HeaderRightSide from '../components/HeaderRightSide';

const UserStack = createStackNavigator();

export default ({navigation}) => {
    const handleDrawer = ()=>{
        navigation.openDrawer();
    }
    return(
        <UserStack.Navigator
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
            <UserStack.Screen name="EditUser" component={editUsuario}/>
        </UserStack.Navigator>
    )
}