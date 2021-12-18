import axios from 'axios';
import queryString from 'query-string';
import * as SecureStore from 'expo-secure-store';

const axiosClient = axios.create({
    baseURL: 'http://192.168.1.3:3000/api',
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    const accessToken = await SecureStore.getItemAsync('token');
    if (accessToken) {
        config.headers.authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default axiosClient;