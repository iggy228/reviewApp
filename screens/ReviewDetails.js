import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Card from '../components/Card'

import { globalStyles, images } from '../styles/global'

export default function ReviewDetail({ route, navigation }) {
    const data = route.params
    
    return (
        <Card>
            <Text style={[globalStyles.title, styles.title]}>{ data.title }</Text>
            <Text style={globalStyles.text}>{ data.body }</Text>
            <View style={styles.rating}>
                <Text>GameZone rating: </Text>
                <Image source={images.ratings[data.rating]}/>
            </View>
        </Card>
    );
}
const styles = StyleSheet.create({
    title: {
        marginBottom: 24
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 12,
        marginTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    }
})