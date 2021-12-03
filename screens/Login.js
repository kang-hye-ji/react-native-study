import React, { useRef, useEffect } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from 'native-base';
import { useForm } from 'react-hook-form';
import AuthButton from '../components/auth/AuthButton';
import { AuthAPI } from '../api/auth';
import { logIn } from '../auth/logIn';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();
  const passwordRef = useRef();
  const onNext = next => {
    next?.current?.focus();
  };
  useEffect(() => {
    register('username');
    register('password');
  }, [register]);
  const onValid = async data => {
    const response = await AuthAPI.getToken({
      email: 'hello@a-ha.io',
      password: 'Thecorp!40519',
    });
    await logIn(response.data.token);
    const test = await AsyncStorage.getItem('token');
    console.log(test);
  };
  return (
    <AuthLayout>
      <Input
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={onNext(passwordRef)}
        onChangeText={text => setValue('username', text)}
      ></Input>
      <Input
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={onValid}
        onChangeText={text => setValue('password', text)}
      ></Input>
      <AuthButton text="Log in" onPress={handleSubmit(onValid)}></AuthButton>
    </AuthLayout>
  );
}
