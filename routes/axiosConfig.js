const axios = require('axios').default;

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;
const API_HOST_NAME = process.env.API_HOST_NAME;
const API_HOST_KEY_VALUE = process.env.API_HOST_KEY_VALUE;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.defaults.headers.common[API_KEY_NAME] = API_KEY_VALUE;
axiosInstance.defaults.headers.common[API_HOST_NAME] = API_HOST_KEY_VALUE;

module.exports = axiosInstance;
