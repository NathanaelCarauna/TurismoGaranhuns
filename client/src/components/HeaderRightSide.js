import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert,StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';

export default ({func}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={func}>
                <Image source={require('../../assets/icones/sininho.png')} style={styles.sino} />
            </TouchableOpacity>
            <TouchableOpacity onPress={func}>
                <Image source={require('../../assets/icones/lupa.png')} style={styles.lupa} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    lupa: {
        marginRight: 10,        
        height: 30,
        width: 30
    },
    sino: {
        marginHorizontal: 15,        
        height: 25,
        width: 25
    }

})