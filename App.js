import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { globalStyles } from './styles/global';
import Home from './screens/Home';

// Getting font from assets/fonts
const getFonts = () => Font.loadAsync({
    'grandstander-bold': require('./assets/fonts/Grandstander-Bold.ttf'),
    'roboto': require('./assets/fonts/Roboto-Regular.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={globalStyles.container}>
        <StatusBar />
        <Home />
      </View>
    );
  }
  else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}