import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator()

function HomeStack() {
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
                    component={Home}
                    options={{
                        title: 'GameZone',
                    }}
                />
                <Stack.Screen 
                    name='Review'
                    component={ReviewDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack;