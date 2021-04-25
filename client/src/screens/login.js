import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard
} from "react-native";
import { Formik } from 'formik';
import AuthContext from '../contexts/auth';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


export default function Login() {

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const { signed, user, signIn } = useContext(AuthContext);

  function handleSignIn() {
    signIn(email, password);
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          signIn( values.email, values.password)
        }}
      >
        {(formikProps) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.formContainer}>
              <Image source={require('../../assets/logo.png')} style={styles.logo} />
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                onChangeText={formikProps.handleChange('email')}
                value={formikProps.values.email}
              />

              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite sua senha"
                onChangeText={formikProps.handleChange('password')}
                value={formikProps.values.password}
              />

              <TouchableOpacity onPress={formikProps.handleSubmit} style={styles.botaoEntrar}>
                <View>
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
    flex:1,
    justifyContent: "center",
    alignItems: "center",

  },
  botaoText: {

  }
});
