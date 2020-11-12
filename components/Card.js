import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
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