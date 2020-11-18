import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal, Button } from 'react-native';

import { globalStyles } from '../styles/global'
import Card from '../components/Card'
import FloatingButton from '../components/FloatingButton'
import ReviewForm from './ReviewForm'

export default function Home({ navigation }) {
    const [review, setReview] = useState({})
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        fetch('http://192.168.241.238:3000/reviews').then(res => res.json()).then(data => {
            setReview(data.reviews)
        })
    })

    return (
        <View style={{flex: 1}}>
            <Modal visible={modalOpen} animationType='slide'>
                <Button title='Back!' onPress={() => setModalOpen(false)}/>
                <ReviewForm closeModal={() => setModalOpen(false)}/>
            </Modal>

            <FlatList
                keyExtractor={item => item.id}
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