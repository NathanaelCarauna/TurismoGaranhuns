import React, { useContext } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import Home from './tabNavigator';
import EditUsuario from '../screens/editUsuario'
import Avatar from '../screens/avatar'
import Configuration from '../screens/configuration'
import Missions from '../screens/missions'
import Conquistas from '../screens/conquistas'
import AuthContext from '../contexts/auth';



const Drawer = createDrawerNavigator()

export default DrawerNavigator => {
    const {signOut} = useContext(AuthContext);
    return(
        <Drawer.Navigator drawerContent={props => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem label='Sair' onPress={signOut} />
                </DrawerContentScrollView>
            )
        }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Usuário" component={EditUsuario} />
            <Drawer.Screen name="Avatar" component={Avatar} />
            <Drawer.Screen name="Missões" component={Missions} />
            <Drawer.Screen name="Conquistas" component={Conquistas} />
            <Drawer.Screen name="Configurações" component={Configuration} />
        </Drawer.Navigator>
    )
}
