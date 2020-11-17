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
    input: {
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 6,
        marginBottom: 4,
        paddingHorizontal: 6,
        fontSize: 16,
        fontFamily: 'roboto'
    }
})

export const images = {
    ratings: {
        '1': require('../assets/icons/rating-1.png'),
        '2': require('../assets/icons/rating-2.png'),
        '3': require('../assets/icons/rating-3.png'),
        '4': require('../assets/icons/rating-4.png'),
        '5': require('../assets/icons/rating-5.png'),
    } 
}