import React,{ useState, useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';


export default function QrScreen(){
    const [menuItens, setMenuItens] = useState([
        { itemName: 'Selo1', id: '1' },
        { itemName: 'Selo2', id: '2' },
        { itemName: 'Selo3', id: '3' },
        { itemName: 'Selo4', id: '4' },
        { itemName: 'Selo5', id: '5' },
        { itemName: 'Selo6', id: '6' },
        { itemName: 'Selo7', id: '7' },
        { itemName: 'Selo8', id: '8' },
        { itemName: 'Selo9', id: '9' },
        { itemName: 'Selo9', id: '10' },
        { itemName: 'Selo9', id: '11' },
        { itemName: 'Selo9', id: '12' },
        { itemName: 'Selo9', id: '13' },
        { itemName: 'Selo9', id: '14' },
        { itemName: 'Selo9', id: '15' },
        { itemName: 'Selo9', id: '16' },
        { itemName: 'Selo9', id: '17' },
    ])

    return(
        <View style={styles.container}>            
            <View style={styles.body}>
                <FlatList
                contentContainerStyle={styles.menuContainer}
                    numColumns={3}                    
                    keyExtractor={(item) => item.id}
                    data={menuItens}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.menuItens} onPress={() => {}}>
                            <Text style={global.menuItemtext}></Text>
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
    },    
    menuItens: {
        backgroundColor: "#EA701B",
        height: 85,
        width: 85,
        borderRadius: 50,        
        marginHorizontal: 7,
        marginVertical: 10,
        borderWidth: 6,
        borderColor: '#bbb'     
    },
        
})