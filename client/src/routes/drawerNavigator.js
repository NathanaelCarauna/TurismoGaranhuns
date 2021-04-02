import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from './tabNavigator';
import EditUsuario from '../screens/editUsuario'


const Drawer = createDrawerNavigator()

export default DrawerNavigator =>(
    <Drawer.Navigator>
        <Drawer.Screen name = "Home" component={Home}/>
        <Drawer.Screen name = "EditUsuario" component={EditUsuario}/>
    </Drawer.Navigator>
)