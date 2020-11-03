import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import Header from '../shared/headerDrawer';

const Stack = createStackNavigator()

function AboutStack() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: {
                backgroundColor: '#444',
                height: 80,
            },
            headerTintColor: '#eee',
        }}>
            <Stack.Screen 
                name='Home'
                component={About}
                options={({navigation}) => {
                    return {
                    title: 'About Gamezone',
                    headerTitleAlign: 'center',
                    headerLeft: () => <Header navigation={navigation} />
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default AboutStack;