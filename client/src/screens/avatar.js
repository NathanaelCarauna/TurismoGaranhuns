import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';


export default function QrScreen(){
    const [menuItens, setMenuItens] = useState([
        { itemName: 'Avatar1', id: '1' },
        { itemName: 'Avatar2', id: '2' },
        { itemName: 'Avatar3', id: '3' },
        { itemName: 'Avatar4', id: '4' },
        { itemName: 'Avatar5', id: '5' },
        { itemName: 'Avatar6', id: '6' },
        { itemName: 'Avatar7', id: '7' },
        { itemName: 'Avatar8', id: '8' },
        { itemName: 'Avatar9', id: '9' },

    ])

    return(
        <View style={styles.container}>            
            <View style={styles.body}>
                <FlatList
                contentContainerStyle={styles.menuContainer}
                    numColumns={2}                    
                    keyExtractor={(item) => item.id}
                    data={menuItens}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.avatarContainer} onPress={() => {}}>
                            <View style={styles.avatarImage}></View>
                            <Text style={styles.menuItemtext}>{item.itemName}</Text>
                        </TouchableOpacity>
                    )}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        alignItems: "center",
        alignContent: 'center',
    },
    body: {        
        width: '100%',
        // backgroundColor: '#eee',
    },
    menuContainer: {             
        alignItems: "center",  
        justifyContent: "center",      
    },    
    avatarContainer: {        
        textAlign: 'center',
    },
    avatarImage: {
        backgroundColor: "#EA701B",
        height: 130,
        width: 130,
        borderRadius: 80,        
        marginHorizontal: 15,
        marginVertical: 10,
        borderWidth: 6,
        borderColor: '#bbb'     
    },
    menuItemtext: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
    }
        
})