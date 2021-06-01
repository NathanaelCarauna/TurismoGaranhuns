import React from 'react'
import Home from '../screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import Parques from '../screens/Parques';
import Pracas from '../screens/Pracas';
import Religao from '../screens/Religiao';
import { Image, StyleSheet } from 'react-native';
import MenuLateralIcon from '../components/MenuLateralIcon';

const AppStack = createStackNavigator();

export default function AppRoutes({ navigation}) {

    const handleDrawer = ()=>{
        navigation.openDrawer();
    }
    return (
    <AppStack.Navigator
        screenOptions={{
            // <Image source={require('../../assets/logo.png')} style={styles.logo} />
            headerLeft: () => <MenuLateralIcon func={handleDrawer} abc={()=>ausdnas}/>,
            headerStyle: {
                backgroundColor: "#213967",
                height: 70,
            },
            headerTintColor: "white",
            headerBackTitle: "Back",
            headerTitle: '',            
        }}
    >
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Parques" component={Parques}/>
        <AppStack.Screen name="Pracas" component={Pracas}/>
        <AppStack.Screen name="Religiao" component={Religao}/>
    </AppStack.Navigator>
)}
