import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Appearance,
  useColorScheme,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

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

  console.log(Appearance.getColorScheme());
  const light = Appearance.getColorScheme() === 'light';
  // const subscription = Appearance.addChangeListener(({ colorScheme }) => {
  //   console.log(colorScheme);
  // });

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <LoggedOutNav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
