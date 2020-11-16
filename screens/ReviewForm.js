import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
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

                }}
            >
            </Formik>
        </View>
    )
}