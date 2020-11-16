import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function FloatingButton({ onPress }) {
    return (
        <TouchableHighlight style={styles.circle} onPress={onPress}>
            <MaterialIcons name="add" size={36} color="white" />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    circle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 60,
        margin: 16,
        padding: 12,
        backgroundColor: '#331ac4',
    }
})