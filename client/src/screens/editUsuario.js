import React, { useState, useContext } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    TextInput,
} from "react-native";
import AuthContext from '../contexts/auth';

export default function EditUsuario({ navigation }) {
    const { user, updateUser } = useContext(AuthContext);

    const [nome, setNome] = useState(user.nome)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleUpdate = () => {
        let canUpdate = true;
        if (!(password === confirmPassword)) {
            console.log('As senhas não coincidem')
            canUpdate = false;
        }
        if(canUpdate) {
            updateUser(user.id, nome, email, password)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.upperSide}>

            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    value={nome}
                    onChangeText={nome => setNome(nome)} />

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={email => setEmail(email)} />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Digite uma senha"
                    value={password}
                    onChangeText={password => setPassword(password)} />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Confirme sua senha"
                    value={confirmPassword}
                    onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} />

                <TouchableOpacity onPress={handleUpdate}>
                    <View style={styles.botaoEntrar}>
                        <Text style={styles.botaoText}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // Main start
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    upperSide: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
    },
    formContainer: {
        flex: 2,
        backgroundColor: "#bbb",
        paddingTop: 20,
        width: "100%",
        alignItems: "center",
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 3,
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    botaoText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 3,
    },
    botaoEntrar: {
        width: 300,
        height: 42,
        backgroundColor: "#213967",
        textDecorationColor: "#fff",
        marginTop: 30,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 35,
    },
    botaoText: {
        color: "#FFFFFF",
    }
});
