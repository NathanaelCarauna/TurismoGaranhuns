import { StatusBar } from "expo-status-bar";
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
import Login from "./login";

export default function Cadastro({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
       placeholder="Email"/>
      <TextInput style={styles.input}
       placeholder="Usuário"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
      />
      <TouchableOpacity style={styles.botaoEntrar}
      onPress={()=> navigation.navigate(Login)}

      >
        <Text>Entrar</Text>
      </TouchableOpacity>
      
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

  }
});