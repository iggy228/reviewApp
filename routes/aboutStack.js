import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import About from '../screens/About';

const Stack = createStackNavigator()

function AboutStack() {
    return (
        <NavigationContainer>
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
                    options={{
                        title: 'About Gamezone',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AboutStack;