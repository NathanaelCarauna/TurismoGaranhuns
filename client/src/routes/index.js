import React, { useContext } from 'react';
import {View, ActivityIndicator} from 'react-native';
import AuthContext from '../contexts/auth';
import AuthRoutes from './authStack.routes';
import TabNavigator from './tabNavigator';
// import AppRoutes from './appStack.routes';


export default function Routes(){
    const {signed, loading} = useContext(AuthContext);
    if (loading){
        return (
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color= '#666'/>
            </View>
        )
    }
    return signed ? <TabNavigator/> : <AuthRoutes/>    
}