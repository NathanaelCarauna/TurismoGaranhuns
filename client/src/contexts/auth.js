import React, { createContext, useState, useEffect } from 'react';
import * as auth from '../services/auth';
import * as userApi from '../services/userApi';
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
            await userApi.signUp(nome, email, password)
                .then(response => {
                    if(response.status = 204){
                        signIn(email, password)
                        return true;
                    }else{
                        return false
                    }
                })
        }catch(e){
            console.log(e)
            return false;
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

    async function deleteAccount(id){
        try{
            await userApi.deleteAccount(id)
                .then(response => {
                    if(response.status == 204){
                        signOut()
                    }else{
                        return false;
                    }                    
                })
                .catch(err => {
                    console.log(err)
                    return false;
                })

        }catch(e){
            console.log(e);
        }
    }
    async function updateUser(id, nome, email, password){
        try{
            await userApi.updateUser(id, nome, email, password)
                .then(response => {
                    if(response.status == 204){
                        console.log('Atualização feita com sucesso')
                        return true;
                    }else{
                        return false;
                    }
                });
        }catch(e){
            console.log(e)
        }
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }        
    
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, signUp,updateUser, deleteAccount, loading}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;