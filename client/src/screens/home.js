import React, { useState, useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { global } from '../styles/global';
import Header from '../components/header';
import AuthContext from '../contexts/auth';


export default function Home() {
    const [name, setName] = useState('Turismo APP');
    const [menuItens, setMenuItens] = useState([
        { itemName: 'Item1', id: '1' },
        { itemName: 'Item2', id: '2' },
        { itemName: 'Item3', id: '3' },
        { itemName: 'Item4', id: '4' },
    ])

    const {signOut } = useContext(AuthContext);
    function handleSignOut() {
        signOut();
    }

    return (
        <View style={global.container}>
            <Header />
            <TouchableOpacity style={styles.botao} onPress={handleSignOut}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <View style={global.body}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={menuItens}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={global.menuItens} onPress={() => { }}>
                            <Text style={global.menuItemtext}>{item.itemName} </Text>
                        </TouchableOpacity>
                    )}
                />

            </View>
            <View style={global.footer}>

            </View>
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

