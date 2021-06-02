import React, { useState, useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { global } from '../styles/global';
import {images} from '../../assets/index';
import AuthContext from '../contexts/auth';


export default function Home({ navigation}) {
    const {deleteAccount, user } = useContext(AuthContext);
    console.log(user)
    
    const [name, setName] = useState('Turismo APP');

    const [menuItens, setMenuItens] = useState([
        { itemName: 'Parques', image: images.parque,'id': '1'},
        { itemName: 'Praças', image: images.parques, id: '2' },
        { itemName: 'Religião', image: images.construcao1, id: '3' },
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
    }    

    return (
        <View style={global.container}>            
            <View style={global.body}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={menuItens}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.menuItens} onPress={() => pressHandler(item.id)}>                            
                            <Image source={item.image} style={styles.categoryImage}/>
                            <Text style={styles.menuItemtext}>{item.itemName} </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
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
        height: 110,
        width: 110,
        // backgroundColor: "#ccc",
        // borderRadius: 50,
        // borderWidth: 5,
        // borderColor: '#fff',                
    },
    menuItemtext: {
        flex: 2,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

