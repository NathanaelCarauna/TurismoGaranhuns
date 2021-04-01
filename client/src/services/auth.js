import api from './api';

export function signIn(email, password){
    return new api.post('/signin', {email, password})        
        
}

export function signUp(nome, email, password){
    return new api.post('/signup', {nome, email, password})
}