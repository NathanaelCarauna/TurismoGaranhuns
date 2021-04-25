import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup
        .string().
        email('Por favor, insira um email válido').
        required('Email necessário'),
    password: Yup
        .string()
        .required('Digite a senha para fazer login')
});