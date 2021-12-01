import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <View>
          <Text>Go to Create Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View>
          <Text>Go to Create Log in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
