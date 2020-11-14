import React from 'react'
import { ImageBackground } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import About from '../screens/About'
import Header from '../components/headerButton'
import HeaderTitle from '../components/headerTitle'

const Stack = createStackNavigator()

function AboutStack() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: {
                backgroundColor: '#444',
                height: 80,
            },
            headerBackground: () => <ImageBackground source={require('../assets/images/game_bg.png')}
            style={{width: '100%', height: '100%'}}/>
        }}>
            <Stack.Screen 
                name='Home'
                component={About}
                options={({navigation}) => {
                    return {
                    headerTitle: () => <HeaderTitle/>,
                    headerTitleAlign: 'center',
                    headerLeft: () => <Header navigation={navigation} />
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default AboutStack;