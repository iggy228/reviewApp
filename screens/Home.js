import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Home screen</Text>
            <Text style={globalStyles.text}>Home screen</Text>
            <Text>Home screen</Text>
        </View>
    );
}