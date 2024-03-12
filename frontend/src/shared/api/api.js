import axios from 'axios';
import { API_BASE_URL, AUTHORIZATION_DATA } from '../const/const';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${localStorage.getItem(AUTHORIZATION_DATA)}`;
  return config;
});

export default api;
