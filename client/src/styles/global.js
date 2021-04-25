import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
    // Main start
    container: {
        flex: 1,
        backgroundColor: '#DFDBD2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        width: '100%',
        height: '82%',
        marginTop: 40,
        backgroundColor: '#DFDBD2',
        alignItems: 'center',
    },
    footer: {
        width: '100%',
        backgroundColor: '#213967',
        paddingVertical: 30,
        paddingHorizontal: 155,
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
    },
    // Main end
    errorText: {
        color: '#EA701B',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6
    }
})