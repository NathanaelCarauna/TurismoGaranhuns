import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    nome: Yup
        .string()
        .min(min=4, 'O nome deve possuir pelo menos ${min} caracteres')
        .required('É necessário infomar um nome'),
    email: Yup
        .string()
        .email('Por favor, insira um email válido')
        .required('Email necessário'),
    password: Yup
        .string()
        .required('Digite a senha para fazer login'),
    confirmPassword: Yup
        .string()
        .required('Confirme sua senha')
        .oneOf([Yup.ref('password'), null], 'As senhas devem coincidir')
});