import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontFamily: 'grandstander-bold',
        fontSize: 24,
        color: '#333',
    },
    text: {
        fontFamily: 'roboto',
        fontSize: 16,
        color: '#333',
    },
    card: {
        // for all
        borderRadius: 8,
        padding: 10,
        // for ios
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        // for android shadow
        elevation: 3,
    }
})