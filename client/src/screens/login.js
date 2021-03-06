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
import { LoginSchema } from '../validationSchemas/loginSchema';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { global } from "../styles/global";


export default function Login() {

  const [ invalidLoginText, setInvalidLoginText] = useState('');
  const { user, signIn } = useContext(AuthContext);

  const eraseInvalidLogin = () => {
    setInvalidLoginText('');
  }
  const invalidLogin = () => {
    setInvalidLoginText('Email ou senha inválidos')
  }
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}               
        onSubmit={(values, actions) => {          
          signIn(values.email, values.password)    
          if(!user){
            invalidLogin();                         
          }
        }}
      >
        {(props) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.formContainer}>
              <Image source={require('../../assets/logo.png')} style={styles.logo} />
              
              {invalidLoginText
                ? <Text style={global.errorText}>{invalidLoginText}</Text>
                : null
              }
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                onTouchStart={eraseInvalidLogin}
                onChangeText={props.handleChange('email')}
                value={props.values.email}
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
                placeholder="Digite sua senha"
                onChangeText={props.handleChange('password')}
                onTouchStart={eraseInvalidLogin}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
                secureTextEntry
              />
              {props.touched.password && props.errors.password
                ? <Text style={global.errorText}>{props.touched.password && props.errors.password}</Text>
                : null
              }

              <TouchableOpacity onPress={props.handleSubmit} style={styles.botaoEntrar}>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  botaoText: {

  }
});
