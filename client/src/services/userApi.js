import api from './api';

export function signUp(nome, email, password){
    return new api.post('/signup', {nome, email, password})
}

export function deleteAccount(id){
    return new api.delete(`/user/${id}`);
}