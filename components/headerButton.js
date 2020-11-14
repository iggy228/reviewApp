import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HeaderButton({ navigation}) {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <TouchableOpacity style={styles.drawerButton} onPress={() => openMenu()}>
            <Feather name="menu" size={24} color="black" />   
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    drawerButton: {
        padding: 6,
        marginLeft: 12,
    }
})