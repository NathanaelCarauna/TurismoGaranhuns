import React, { createContext, useState, useEffect } from 'react';
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({
    signed: false,
    token: '',
    user: {},
    signIn: ()=>{}
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadStorageData(){
            const storagedUser = await AsyncStorage.getItem('@TGAuth:user');
            const storageToken = await AsyncStorage.getItem('@TGAuth:token');

            if(storagedUser && storageToken){
                setUser(JSON.parse(storagedUser));
            }
        }
        loadStorageData();
    }, [])
    async function signIn() {
        const response = await auth.signIn();        
        setUser(response.user);

        await AsyncStorage.setItem('@TGAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@TGAuth:token', response.token);
    }

    async function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;