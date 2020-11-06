import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/headerButton';

const Stack = createStackNavigator()

function HomeStack() {
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
                component={Home}
                options={({ navigation }) => {
                    return {
                        headerTitle: 'GameZone',
                        headerTitleAlign: 'center',
                        headerLeft: () => <Header navigation={navigation} />
                    }
                }}
            />
            <Stack.Screen 
                name='Review'
                component={ReviewDetails}
            />
        </Stack.Navigator>
    )
}

export default HomeStack;