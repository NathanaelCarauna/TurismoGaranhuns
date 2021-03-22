import React, { createContext, useState } from 'react';
import * as auth from '../services/auth';

const AuthContext = createContext({
    signed: false,
    token: '',
    user: {},
    signIn: ()=>{}
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    async function signIn() {
        const response = await auth.signIn();        
        setUser(response.user);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;