import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails'
import HeaderButton from '../components/headerButton'
import HeaderTitle from '../components/headerTitle'

const Stack = createStackNavigator()

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: {
                backgroundColor: '#444',
                height: 80,
            },
            headerTintColor: '#eee',
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen 
                name='Home'
                component={Home}
                options={({ navigation }) => {
                    return {
                        headerTitle: () => <HeaderTitle/>,
                        headerLeft: () => <HeaderButton navigation={navigation} />
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