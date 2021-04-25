import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard
} from "react-native";
import { Formik } from 'formik';
import { SignUpSchema } from '../validationSchemas/signUpSchema';
import AuthContext from '../contexts/auth';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { global } from "../styles/global";

export default function Cadastro({ navigation }) {

  const { signed, user, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ nome: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={SignUpSchema}
        onSubmit={(values, actions) => {
          signUp(values.nome, values.email, values.password)
        }}
      >
        {(props) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.formContainer}>
              <Image source={require('../../assets/logo.png')} style={styles.logo} />
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={props.handleChange('nome')}
                value={props.values.nome}
                onBlur={props.handleBlur('nome')}
              />
              {props.touched.nome && props.errors.nome
                ? <Text style={global.errorText}>{props.touched.nome && props.errors.nome}</Text>
                : null
              }

              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={props.values.email}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                keyboardType="email-address"
              />
              {props.touched.email && props.errors.email
                ? <Text style={global.errorText}>{props.touched.email && props.errors.email}</Text>
                : null
              }

              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite uma senha"
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                secureTextEntry
              />
              {props.touched.password && props.errors.password
                ? <Text style={global.errorText}>{props.touched.password && props.errors.password}</Text>
                : null
              }

              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Confirme sua senha"
                value={props.values.confirmPassword}
                onChangeText={props.handleChange('confirmPassword')}
                onBlur={props.handleBlur('confirmPassword')}
                secureTextEntry
              />
              {props.touched.confirmPassword && props.errors.confirmPassword
                ? <Text style={global.errorText}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                : null
              }

              <TouchableOpacity onPress={props.handleSubmit} style={styles.botaoEntrar}>
                <View >
                  <Text style={styles.botaoText}>Entrar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoText: {

  }
});
