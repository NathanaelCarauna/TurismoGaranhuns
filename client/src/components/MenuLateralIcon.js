import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert,StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';

export default ({func}) => {
    
    return (
        <TouchableOpacity onPress={func}>
            <Image source={require('../../assets/icones/menu.png')} style={styles.menuIcon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    menuIcon: {
        marginLeft: 15,        
        height: 25,
        width: 25
    }
})