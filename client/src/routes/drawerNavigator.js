import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from './tabNavigator';
import EditUsuario from '../screens/editUsuario'
import Avatar from '../screens/avatar'
import Configuration from '../screens/configuration'
import Missions from '../screens/missions'
import Conquistas from '../screens/conquistas'



const Drawer = createDrawerNavigator()

export default DrawerNavigator =>(
    <Drawer.Navigator>
        <Drawer.Screen name = "Home" component={Home}/>
        <Drawer.Screen name = "Usuário" component={EditUsuario}/>
        <Drawer.Screen name = "Avatar" component={Avatar}/>
        <Drawer.Screen name = "Missões" component={Missions}/>
        <Drawer.Screen name = "Conquistas" component={Conquistas}/>
        <Drawer.Screen name = "Configurações" component={Configuration}/>
        <Drawer.Screen name = "Sair" component={Configuration}/>
    </Drawer.Navigator>
)