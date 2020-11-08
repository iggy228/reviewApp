import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { globalStyles } from '../styles/global'
import Card from '../components/Card'

export default function Home({ navigation }) {
    const [review, setReview] = useState([
        {title: 'Zelda', rating: 5, body: 'Lorem ipsum sit dolor', key: '1'},
        {title: 'Pokemon red and white', rating: 4, body: 'Lorem ipsum sit dolor', key: '2'},
        {title: 'Not so "Final Fantasy"', rating: 2, body: 'Lorem ipsum sit dolor', key: '3'},
    ])

    return (
        <View>
            <FlatList
                key={review.key}
                data={review} 
                renderItem={
                ({ item }) => (
                    <Card navigation={navigation} item={item}>
                        <Text style={ globalStyles.title }>{ item.title }</Text>
                        <Text style={ globalStyles.text }>Rating: { item.rating }</Text>
                    </Card>
                )}
            />
        </View>
    );
}