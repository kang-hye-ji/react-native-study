import { Flex, Image } from 'native-base';
import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

export default function AuthLayout({ children }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      style={{ display: 'flex', flex: 1 }}
      onPress={dismissKeyboard}
    >
      <Flex alignItems="center" justifyContent="center" flex="1">
        <KeyboardAvoidingView behavior="position">
          <Image
            source={require('../../assets/instagram_logo.png')}
            resizeMode="contain"
            maxW="50%"
            h="24"
            mb="5"
          ></Image>
          {children}
        </KeyboardAvoidingView>
      </Flex>
    </TouchableWithoutFeedback>
  );
}
