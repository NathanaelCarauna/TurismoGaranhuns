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
        // { itemName: 'Editar Usuário', id: '4' },
        // { itemName: 'Remover Usuário', id: '5' },
        { itemName: 'Sair', id: '6' },
    ])

    function pressHandler(id){
        if(id == 1){
            navigation.navigate('Parques')
        }
        if(id == 2){
            navigation.navigate('Pracas')
        }
        if(id == 3){
            navigation.navigate('Religiao')
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
                        <TouchableOpacity style={styles.menuItens} onPress={() => pressHandler(item.id)}>
                            <View style={styles.categoryImage}></View>
                            <Text style={styles.menuItemtext}>{item.itemName} </Text>
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
    menuItens: {     
        flexDirection: 'row',   
        justifyContent: 'center',
        alignItems: "center",        
        backgroundColor: '#EA701B',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 320,
        margin: 15,
        borderRadius: 30,
    },
    categoryImage: {
        flex: 1,        
        height: 100,
        width: 100,
        backgroundColor: "#ccc",
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',                
    },
    menuItemtext: {
        flex: 2,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

