import axios from 'axios';
import { io } from 'socket.io-client';
import { API_BASE_URL, AUTHORIZATION_DATA } from '../const/const';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const authData = JSON.parse(localStorage.getItem(AUTHORIZATION_DATA));
  if (authData?.token) {
  // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${authData.token}`;
  }
  return config;
});

export const socket = io();
