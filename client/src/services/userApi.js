import api from './api';

export function signUp(nome, email, password){
    return new api.post('/signup', {nome, email, password})
}

export function deleteAccount(id){
    return new api.delete(`/user/${id}`);
}

export function updateUser(id, nome, email, password){
    return new api.patch(`/user/${id}`, {nome, email, password})
}