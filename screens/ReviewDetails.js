import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { globalStyles } from '../styles/global';

export default function ReviewDetail({ route, navigation }) {
    const data = route.params
    
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{ data.title }</Text>
            <Text style={globalStyles.text}>{ data.body }</Text>
            <Text>{ data.rating }</Text>
        </View>
    );
}