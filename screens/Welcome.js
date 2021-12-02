import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';

const styles = StyleSheet.create({
  loginLink: { color: 'blue', fontWeight: '600', marginTop: 10 },
});

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate('CreateAccount');
  const goToLogin = () => navigation.navigate('Login');

  return (
    <AuthLayout>
      <AuthButton
        onPress={goToCreateAccount}
        disabled="false"
        text="Create new Account"
      ></AuthButton>
      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.loginLink}>Log in</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}
