import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal, StyleSheet, Button } from 'react-native';

import { globalStyles } from '../styles/global'
import Card from '../components/Card'
import FloatingButton from '../components/FloatingButton'
import ReviewForm from '../screens/ReviewForm'


export default function Home({ navigation }) {
    const [review, setReview] = useState([
        {title: 'Zelda', rating: 5, body: 'Lorem ipsum sit dolor', key: '1'},
        {title: 'Pokemon red and white', rating: 4, body: 'Lorem ipsum sit dolor', key: '2'},
        {title: 'Not so "Final Fantasy"', rating: 2, body: 'Lorem ipsum sit dolor', key: '3'},
    ])
    
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <View style={{flex: 1}}>
            <Modal visible={modalOpen} animationType='slide'>
                
            </Modal>

            <FlatList
                key={review.key}
                data={review} 
                renderItem={
                ({ item }) => (
                    <Card navigation={navigation} item={item}>
                        <TouchableOpacity onPress={() => navigation.push('Review', item)}>
                            <Text style={ globalStyles.title }>{ item.title }</Text>
                            <Text style={ globalStyles.text }>Rating: { item.rating }</Text>
                        </TouchableOpacity>
                    </Card>
                )}
            />

            <FloatingButton onPress={() => setModalOpen(true)}/>

        </View>

    );
}

const styles = StyleSheet.create({
    modalContent: {

    }
})