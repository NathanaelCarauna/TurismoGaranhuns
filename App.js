import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('Turismo APP');
  const [menuItens, setMenuItens] = useState([
    { itemName: 'Item1', id: '1'},
    { itemName: 'Item2', id: '2'},
    { itemName: 'Item3', id: '3'},
    { itemName: 'Item4', id: '4'},
    { itemName: 'Item5', id: '5'},
    { itemName: 'Item6', id: '6'},
    { itemName: 'Item7', id: '7'},
    { itemName: 'Item8', id: '8'},
    { itemName: 'Item9', id: '9'},
    { itemName: 'Item10', id: '10'},
  ])

  const pressHandler = (id) => {
    console.log(id);
  }
  return (
    <View style={styles.container}>      
      <View style={styles.header}>        
      </View>
      <View style={styles.body}>    
        <FlatList 
          keyExtractor={(item) => item.id}
          data={menuItens}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.menuItens}onPress={() => pressHandler(item.id)}>
              <Text style={styles.menuItemtext}>{item.itemName} </Text>
            </TouchableOpacity>
          )}
        />
        
      </View>
      <View style={styles.footer}>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Main start
  container: {
    flex: 1,
    backgroundColor: '#DFDBD2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#213967',        
    width: '100%',
    height: 35,
  },
  body : {
    width: '100%',
    height: '82%',
    marginTop: 40,
    backgroundColor: '#DFDBD2',
    alignItems: 'center',
  },  
  footer: {
    width: '100%',
    backgroundColor: '#213967',
    paddingVertical:30,
    paddingHorizontal: 155,    
    borderTopLeftRadius: 90,
    borderTopRightRadius:90,
  },
  // Main end

  //Main menu start
  menuItens: {
    backgroundColor: '#EA701B',
    paddingVertical:50,
    width: 320,    
    margin: 20,
    borderRadius: 10,    
  }, 
  menuItemtext: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  //Main menu end
});
