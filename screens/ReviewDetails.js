import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { globalStyles } from '../styles/global';

export default function ReviewDetail({ navigation }) {
    return (
        <View >
            <Text styles={globalStyles.title}>{ navigation.getParam('title') }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})