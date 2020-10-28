import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Home screen</Text>
            <Text style={styles.text}>Home screen</Text>
            <Text>Home screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    h1: {
        fontFamily: 'grandstander-bold',
    },
    text: {
        fontFamily: 'roboto',
    }
})