import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';


export default function QrScreen(){
    const [menuItens, setMenuItens] = useState([
        { itemName: 'Igreja 1', id: '1' },
        { itemName: 'Igreja 2', id: '2' },
        { itemName: 'Igreja 3', id: '3' },        

    ])

    return(
        <View style={styles.container}>            
            <View style={styles.body}>
                <FlatList
                contentContainerStyle={styles.menuContainer}
                    numColumns={1}                    
                    keyExtractor={(item) => item.id}
                    data={menuItens}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.avatarContainer} onPress={() => {}}>
                            <View style={styles.placeImage}></View>
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
    placeImage: {
        backgroundColor: "#EA701B",
        height: 200,
        width: 200,
        borderRadius: 100,        
        marginHorizontal: 15,
        marginVertical: 10,
        borderWidth: 12,
        borderColor: '#ccc'     
    },
    menuItemtext: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
    }
        
})