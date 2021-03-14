import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert,StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const clicou = () =>{
    Alert.alert("TurismoGaranhuns Login")
  }
    return(
      <View style={styles.container}>
        <TextInput style = {styles.input}
          placeholder = "Digite seu email"/>      
        <TextInput style={styles.input}
          secureTextEntry ={true}
          placeholder= "Digite sua senha"/> 
        <TouchableOpacity style={styles.botao}
          onPress={()=>{this.clicou()}}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>)
    
  }

  const styles = StyleSheet.create({
    // Main start
    container: {
      flex: 1,
      backgroundColor: '#DFDBD2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      marginTop: 10,
      padding: 10,
      width:300,
      backgroundColor:'#fff',
      fontSize:16,
      fontWeight:'bold',
      borderRadius:3,
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
  
    }
  })