import React from 'react'
import { View, Text } from 'react-native'

import { globalStyles } from '../styles/global'

export default function Card({ item }) {
    return (
        <View style={globalStyles.card}>
            <Text style={ globalStyles.title }>{ item.title }</Text>
            <Text style={ globalStyles.text }>Rating: { item.rating }</Text>
        </View>
    )
}