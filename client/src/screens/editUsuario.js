import React from 'react';
import { View, Button } from 'react-native';

export default function EditUsuario({navigation}){
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Button title ='Abrir'
                        onPress={() => navigation.openDrawer()}/>
            </View>

        </View>
    )
}