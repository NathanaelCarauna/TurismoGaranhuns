import api from './api';

export function signIn(email, password){
    return new api.post('/signin', {email, password})                
}

