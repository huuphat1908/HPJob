import queryString from 'query-string';

import axiosClient from './axiosClient';

const jobTitleApi = {
    getAllJobTitle: () => {
        const url = '/job-titles';
        return axiosClient({
            url,
            method: 'get'
        });
    },

    searchJobTitle: (jobTitle) => {
        let query = {
            title: jobTitle
        };
        query = queryString.stringify(query);
        const url = `/job-titles/search?${query}`;
        return axiosClient({
            url,
            method: 'get'
        });
    },

    createJobTitle: (title) => {
        const url = '/job-titles';
        return axiosClient({
            url,
            method: 'post',
            data: {
                title
            }
        });
    },

    modifyJobTitle: (id, title) => {
        const url = `/job-titles/${id}`;
        return axiosClient({
            url,
            method: 'put',
            data: {
                title
            }
        });
    },

    deleteJobTitle: (id) => {
        const url = `/job-titles/${id}`;
        return axiosClient({
            url,
            method: 'delete'
        });
    }
};

export default jobTitleApi;