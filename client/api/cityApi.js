import queryString from 'query-string';

import axiosClient from './axiosClient';

const cityApi = {
    getAllCity: () => {
        const url = '/cities';
        return axiosClient({
            url,
            method: 'get'
        });
    },

    searchCity: (cityName) => {
        let query = {
            name: cityName
        };
        query = queryString.stringify(query);
        const url = `/cities/search?${query}`;
        return axiosClient({
            url,
            method: 'get'
        });
    },

    createCity: (name) => {
        const url = '/cities';
        return axiosClient({
            url,
            method: 'post',
            data: {
                name
            }
        });
    },

    modifyCity: (id, name) => {
        const url = `/cities/${id}`;
        return axiosClient({
            url,
            method: 'put',
            data: {
                name
            }
        });
    },

    deleteCity: (id) => {
        const url = `/cities/${id}`;
        return axiosClient({
            url,
            method: 'delete'
        });
    }
};

export default cityApi;