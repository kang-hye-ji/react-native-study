import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import LoggedInNav from './navigators/LoggedInNav';
import { isLoggedIn } from './auth/logIn';

export default function App() {
  const [loading, setLoading] = useState(true);
  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font));
    const imagesToLoad = [require('./assets/instagram_logo.png')];
    console.log(fontPromises);
    const imagePromises = imagesToLoad.map(image => Asset.loadAsync(image));

    return Promise.all([...fontPromises, ...imagePromises]);
  };

  if (loading) {
    return (
      <AppLoading
        onError={console.warn}
        onFinish={() => setLoading(!loading)}
        startAsync={preload}
      />
    );
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
