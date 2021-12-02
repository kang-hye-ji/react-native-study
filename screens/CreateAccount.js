import { KeyboardAvoidingView } from 'native-base';
import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';

export default function CreateAccount() {
  const lastNameRef = useRef();
  const onFirstNameNext = () => {
    lastNameRef?.current?.focus();
  };
  return (
    <AuthLayout>
      <KeyboardAvoidingView behavior="height">
        <TextInput
          onSubmitEditing={onFirstNameNext}
          placeholder="First Name"
          returnKeyType="go"
        ></TextInput>
        <TextInput
          placeholder="Last Name"
          ref={lastNameRef}
          returnKeyType="go"
        ></TextInput>
        <TextInput placeholder="User Name" returnKeyType="go"></TextInput>
        <TextInput placeholder="Email" returnKeyType="go"></TextInput>
        <TextInput
          secureTextEntry
          placeholder="Password"
          keyboardType="password"
          returnKeyType="go"
        ></TextInput>
        <AuthButton
          onPress={() => null}
          disabled="true"
          text="Create Account"
        ></AuthButton>
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
