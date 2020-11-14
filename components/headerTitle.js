import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import { globalStyles } from '../styles/global'

export default function HeaderTitle() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/icons/heart_logo.png')} style={styles.logo}/>
            <Text style={[globalStyles.title]}>GameZone</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 8
    }
})