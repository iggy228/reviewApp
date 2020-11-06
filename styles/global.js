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
        borderRadius: 16,
        padding: 10,
        backgroundColor: '#eee',
        marginHorizontal: 12,
        marginVertical: 8,
        // for ios
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        // for android shadow
        elevation: 4,
    }
})