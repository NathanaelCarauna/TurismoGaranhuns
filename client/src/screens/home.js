import React, { useState, useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { global } from '../styles/global';
import Header from '../components/header';
import AuthContext from '../contexts/auth';


export default function Home({ navigation}) {
    const {signOut, deleteAccount, user } = useContext(AuthContext);
    console.log(user)
    
    const [name, setName] = useState('Turismo APP');

    const [menuItens, setMenuItens] = useState([
        { itemName: 'Parques', id: '1' },
        { itemName: 'Praças', id: '2' },
        { itemName: 'Religião', id: '3' },
        { itemName: 'Editar Usuário', id: '4' },
        { itemName: 'Remover Usuário', id: '5' },
        { itemName: 'Sair', id: '6' },
    ])

    function pressHandler(id){
        if(id == 4){
            navigation.navigate('EditUsuario')
        }
        if(id == 5){            
            const  res = deleteAccount(user.id)            
            console.log(res)
        }
        if(id == 6){
            signOut();
        }

    }    

    return (
        <View style={global.container}>            
            <View style={global.body}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={menuItens}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={global.menuItens} onPress={() => pressHandler(item.id)}>
                            <Text style={global.menuItemtext}>{item.itemName} </Text>
                        </TouchableOpacity>
                    )}
                />

            </View>
            {/* <View style={global.footer}>

            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({        
    botao: {
      width: 300,
      height: 42,
      backgroundColor: "#fff",
      marginTop: 10,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
    }
});

