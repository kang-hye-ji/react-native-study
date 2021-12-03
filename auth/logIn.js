import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: 상태변화를 추적하는 변수를 만들 다양한 방법 서치하기
export let isLoggedIn = false;

export async function logIn(token) {
  await AsyncStorage.setItem('token', token);
  isLoggedIn = true;
}
