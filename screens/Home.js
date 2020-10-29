import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [review, setReview] = useState([
        {title: 'Zelda', rating: 5, body: 'Lorem ipsum sit dolor', key: '1'},
        {title: 'Pokemon red and white', rating: 4, body: 'Lorem ipsum sit dolor', key: '2'},
        {title: 'Not so "Final Fantasy"', rating: 2, body: 'Lorem ipsum sit dolor', key: '3'},
    ])


    const pressHandler = () => {
        navigation.push('ReviewDetails')
    }

    return (
        <View style={globalStyles.container}>
            <FlatList
                key={review.key}
                data={review} 
                renderItem={
                ({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.title}>{ item.title }</Text>
                    </TouchableOpacity>    
                )}
            />
        </View>
    );
}