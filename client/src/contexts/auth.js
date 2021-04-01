import React, { createContext, useState, useEffect } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({
    signed: false,
    token: '',
    user: {},
    signIn: ()=>{}
});

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(null)
    const [user, setUser] = useState(null);

    useEffect(() => {
        setLoading(true)
        async function loadStorageData(){
            const storagedUser = await AsyncStorage.getItem('@TGAuth:user');
            const storageToken = await AsyncStorage.getItem('@TGAuth:token');

            if(storagedUser && storageToken){
                api.defaults.headers.Authorization= `Bearer ${storageToken}`
                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);
        }
        loadStorageData();
    }, [])

    async function signUp(nome, email, password){
        try{
            await auth.signUp(nome, email, password)
                .then(response => {
                    if(response.status = 204){
                        signIn(email, password)
                    }else{
                        return false
                    }
                })
        }catch(e){
            console.log(e)
        }
    }
    //Login no sistema
    async function signIn(email, password) {
        try{
            await auth.signIn(email, password)
                .then(response => {
                    console.log(response.data.user)
                    if(response.data.user){                    
                        setUser(response.data.user);
                        AsyncStorage.setItem('@TGAuth:user', JSON.stringify(response.data.user));
                    }
                    if(response.data.token){
                        api.defaults.headers.Authorization= `Bearer ${response.data.token}`
                        AsyncStorage.setItem('@TGAuth:token', response.data.token);
                    }    
                    return(true)            
                })
                .catch(err => {
                    console.log(err);
                    return false;
                });                
        }catch(e){
            console.log(e);
            return false;
        }
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }    
    
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, signUp, loading}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;