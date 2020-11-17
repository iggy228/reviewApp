import React from 'react'
import { Button, View, StyleSheet, TextInput } from 'react-native'
import { Form, Formik } from 'formik'

import { globalStyles } from '../styles/global'

export default function ReviewForm() {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={
                    {title: '', body: '', rating: 0}
                }
                onSubmit={(values) => {
                    values.rating = parseInt(values.rating)
                    console.log(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Text'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1 - 5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                        />
                        <Button title='Submit!'
                            color='#feba45'
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}