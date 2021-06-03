import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {images} from '../../assets';

export default ({ navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.upperSide}>
                <Image source={images.relogioDasFlores} style={styles.imagem}/>
            </View>
            <View style={styles.downSide}>
                <View style={styles.dadosContainer}>
                    <Image source={images.localIcon} style={styles.localIcon} />
                    <View style={styles.nomeContainer}>
                        <Text style={styles.nome}>
                            Ponto turistico
                        </Text>
                        <Text style={styles.contato}>
                            87 9 xxxx-xxxx 
                        </Text>
                    </View>
                </View>
                <View style={styles.descricaoContainer}>
                    <Text style={styles.descricao}>
                        Isso vai ser a descrição do ponto turistico,
                        preenchido dinamicamente,
                        vou falar mais alguma cois aqui só pra preencher mesmo.
                    </Text>
                </View>
            </View>            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    upperSide: {
        backgroundColor: "pink",        
        height: 200
    },
    downSide: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 600,
        backgroundColor: "white"        

    },
    dadosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 2,
        borderRadius: 35,
        borderColor: '#e9ecef',
        marginHorizontal: 22,
        marginVertical: 22,
    },
    descricaoContainer: {
        flexDirection: 'row',
        backgroundColor: '#e9ecef',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#e9ecef',
        marginHorizontal: 22,
    },
    nomeContainer: {

    },
    nome: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    localIcon: {                
    },
    imagem: {
        width: '100%',
    }
    
})