import axios from 'axios';
import queryString from 'query-string';
import * as SecureStore from 'expo-secure-store';

import { baseURLLocal } from '../configs/baseUrl';

const axiosClient = axios.create({
    baseURL: `${baseURLLocal}/api`,
    headers: {
        'content-type': 'application/json',
    },
    withCredentials: true,
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