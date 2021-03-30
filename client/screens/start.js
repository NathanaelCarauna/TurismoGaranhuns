import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  OnPress,
  TouchableOpacity, Image
} from "react-native";
import Login from "./login";
import Home from "./home";
import Cadastro from "./cadastro";

export default function Start({ navigation }) {
  return (
      
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao}
        onPress={() => navigation.navigate(Login)}
        >
          <Text>Login</Text>
        </TouchableOpacity>      
      <TouchableOpacity style={styles.botao}
        onPress={() => navigation.navigate(Cadastro)}
        >
        <Text>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoConvidado}
       onPress={() => navigation.navigate(Home)}
      
      >
        <Text>Entrar como convidado</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#213967",
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
  botaoConvidado: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: 300,
    height: 42,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#EA701B",
  },
});
