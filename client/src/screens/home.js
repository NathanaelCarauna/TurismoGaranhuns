import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { global } from '../styles/global';
import Header from '../components/header';


export default function Home() {
    const [name, setName] = useState('Turismo APP');
    const [menuItens, setMenuItens] = useState([
        { itemName: 'Item1', id: '1' },
        { itemName: 'Item2', id: '2' },
        { itemName: 'Item3', id: '3' },
        { itemName: 'Item4', id: '4' },
        { itemName: 'Item5', id: '5' },
        { itemName: 'Item6', id: '6' },
        { itemName: 'Item7', id: '7' },
        { itemName: 'Item8', id: '8' },
        { itemName: 'Item9', id: '9' },
        { itemName: 'Item10', id: '10' },
    ])

    const getUsers = async () => {
        try {
            let response = await fetch(
                `http://192.168.1.2:8000/api/user/${1}`
            );
            let json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={global.container}>
            <Header />
            <View style={global.body}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={menuItens}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={global.menuItens} onPress={() => getUsers(item.id)}>
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


