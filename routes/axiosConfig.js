const axios = require('axios').default;

const API_BASE_URL = process.env.API_BASE_URL;
const API_ACCESS_KEY = process.env.API_ACCESS_KEY;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['access_key'] = API_ACCESS_KEY;
  return config;
});

module.exports = axiosInstance;
