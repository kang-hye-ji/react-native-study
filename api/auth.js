import axios from 'axios';

const API = axios.create({
  baseURL: 'https://auth-api.a-ha.kr/',
});

function getToken(data) {
  return API.post('/login', data);
}

export const AuthAPI = {
  getToken,
};
