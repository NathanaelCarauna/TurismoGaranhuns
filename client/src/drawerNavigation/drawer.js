import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/home'
import EditUsuario from '../screens/editUsuario'


const Drawer = createDrawerNavigator()

export default props =>(
    <Drawer.Navigator>
        <Drawer.Screen name = "Teste" component={Home}/>
        <Drawer.Screen name = "Teste2" component={EditUsuario}/>
    </Drawer.Navigator>
)