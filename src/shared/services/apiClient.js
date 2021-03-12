import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiClient.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers['x-rapidapi-key'] = process.env.REACT_APP_API_KEY;
  return config;
});

export default apiClient;
