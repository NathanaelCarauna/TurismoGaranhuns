import React, { useContext } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Alert } from 'react-native';
import Home from './tabNavigator';
import Configuration from '../screens/configuration'
import Missions from '../screens/missions'
import Conquistas from '../screens/conquistas'
import AuthContext from '../contexts/auth';
import userStackRoutes from './userStack.routes';
import avatarStackRoutes from './avatarStack.routes';



const Drawer = createDrawerNavigator()

export default DrawerNavigator => {
    const { signOut } = useContext(AuthContext);
    const handleLogout = () => {
        Alert.alert(
            "Confirmação de logout",
            "Tem certeza que deseja sair?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: signOut }
            ]
        )
    }
    return (
        <Drawer.Navigator drawerContent={props => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem label='Sair' onPress={handleLogout} />
                </DrawerContentScrollView>
            )
        }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Usuário" component={userStackRoutes} />
            <Drawer.Screen name="Avatar" component={avatarStackRoutes} />
            <Drawer.Screen name="Missões" component={Missions} />
            <Drawer.Screen name="Conquistas" component={Conquistas} />
            <Drawer.Screen name="Configurações" component={Configuration} />
        </Drawer.Navigator>
    )
}
