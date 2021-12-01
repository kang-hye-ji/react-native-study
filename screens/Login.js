import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text>Go to Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
