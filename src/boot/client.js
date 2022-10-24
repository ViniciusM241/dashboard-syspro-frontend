import axios from 'axios';
import { getToken, removeToken } from './auth';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

client.interceptors.response.use((response) => response,
  (err) => {
    if (window.location.href.includes('login'))
      throw err;

    if (err?.response?.status === 401) {
      alert('Login necessário');
      removeToken();
      window.location.href = '/';
    }

    return err?.response;
  }
);

export default client;
