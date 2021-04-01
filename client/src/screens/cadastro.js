import { StatusBar } from "expo-status-bar";
import React, { useState, useContext} from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import AuthContext from '../contexts/auth';

export default function Cadastro({navigation}) {
  const [nome, setNome] = useState('')  
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')  
  const [confirmPassword, setConfirmPassword] = useState('')  
  
  const { signed, user, signUp } = useContext(AuthContext);
  

  function handleSignUp() {
    let canSignUp = true
    if(!email){
      console.log('O campo Email é necessário')
      canSignUp = false
    }
    if(!password){
      console.log('É preciso digitar uma senha')
      canSignUp = false
    }
    if(!(password === confirmPassword)){
      console.log('As senhas não coincidem')
      canSignUp = false
    }
    if(canSignUp){
      signUp(nome, email, password);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/> 
      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu nome" 
          value={nome}
          onChangeText={nome => setNome(nome)}/>

        <TextInput 
          style={styles.input} 
          placeholder="Digite seu email" 
          value={email}
          onChangeText={email => setEmail(email)}/>
          
        <TextInput 
          style={styles.input} 
          secureTextEntry={true} 
          placeholder="Digite uma senha"
          value={password}
          onChangeText={password => setPassword(password)}/>
        
        <TextInput 
          style={styles.input} 
          secureTextEntry={true} 
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}/>

        <TouchableOpacity onPress={handleSignUp}>
          <View style={styles.botaoEntrar}>
            <Text style={styles.botaoText}>Entrar</Text>
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
    backgroundColor: "#213967",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#EA701B",
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
  formContainer: {

  },
  botaoText: {

  }
});
