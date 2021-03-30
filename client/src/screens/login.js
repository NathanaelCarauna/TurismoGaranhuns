import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD:client/screens/login.js
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
=======
import React, { useContext } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from "react-native";
import AuthContext from '../contexts/auth';

export default function Login() {  

  const {signed, user, signIn} = useContext(AuthContext);
  console.log(signed);
  console.log(user);
  
  function handleSignIn() {    
    signIn();
  }
>>>>>>> f73eda4dcf78e0dd0d9179ddf51b0abf556b790a:client/src/screens/login.js

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite seu email" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
<<<<<<< HEAD:client/screens/login.js
      />
      <TouchableOpacity style={styles.botaoEntrar}>
        <Text>Entrar</Text>
      </TouchableOpacity>
=======
      />            
      <TouchableOpacity style={styles.botao} onPress={handleSignIn}>
        <Text>Login</Text>
      </TouchableOpacity>      
>>>>>>> f73eda4dcf78e0dd0d9179ddf51b0abf556b790a:client/src/screens/login.js
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
  botaoEntrar:{
    width: 300,
    height: 42,
    backgroundColor: "#EA701B",
    marginTop: 30,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",

  },
});
