import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert,StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default function header(){
    return (
        <View style={styles.header}>        
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#213967',        
        width: '100%',
        height: 35,
      },
})