import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert,StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default ({func}) => {
    
    return (
        <TouchableOpacity onPress={func}>
            <Ionicons name={'menu'} size={32} color={'white'} style={styles.menuIcon}/>
            {/* <Image source={require('../../assets/icones/menu.png')} style={styles.menuIcon} /> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    menuIcon: {
        marginLeft: 15, 
        marginBottom: 10,       
        height: 25,
        width: 25
    }
})