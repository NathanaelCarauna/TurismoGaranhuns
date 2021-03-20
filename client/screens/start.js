import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button,Alert,FlatList,TextInput, KeyboardAvoidingView, OnPress } from 'react-native';
import Login from './login';


export default function Start() {
 return(
      <View style={styles.container}>
        <Button style={styles.botao}
          title="Login"
          onPress={() =>
            this.props.navigation.navigate(Login)
          }
        />
        
        <TouchableOpacity style={styles.botao}>
          <Text>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoConvidado}>
          <Text>Entrar como convidado</Text>
        </TouchableOpacity>

      </View>)
    }
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#213967'
  },
  botao:{
    width:300,
    height:42,
    backgroundColor:'#fff',
    marginTop: 10,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
  },
  botaoText:{
    fontSize:16,
    fontWeight:'bold',
    color: 'black'
  },
  botaoConvidado:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: 30,
    width:300,
    height:42,
    fontSize:16,
    fontWeight:'bold',
    color: 'black',
    backgroundColor: '#EA701B'

  }
});
