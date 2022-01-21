import queryString from 'query-string';

import axiosClient from './axiosClient';

const jobApi = {
    getAllJob: (title, type, city) => {
        let query = {
            ...(title) && { title },
            ...(type) && { type },
            ...(city) && { city }
        };
        query = queryString.stringify(query);
        const url = `/jobs${query ? '?' : ''}${query}`;
        return axiosClient({
            url,
            method: 'get'
        });
    },

    getOneJob: (jobId) => {
        const url = `/jobs/${jobId}`;
        return axiosClient({
            url,
            method: 'get'
        });
    },

    createJob: (data) => {
        const url = '/jobs';
        return axiosClient({
            url,
            method: 'post',
            data: {...data}
        });
    },

    applyToJob: (jobId, candidateId) => {
        const url = `/jobs/apply/${jobId}/${candidateId}`;
        return axiosClient({
            url,
            method: 'patch'
        });
    },

    unapplyToJob: (jobId, candidateId) => {
        const url = `/jobs/unapply/${jobId}/${candidateId}`;
        return axiosClient({
            url,
            method: 'patch'
        });
    },

    completeJob: (jobId) => {
        const url = `/jobs/complete/${jobId}`;
        return axiosClient({
            url,
            method: 'patch'
        });
    },

    undoCompleteJob: (jobId) => {
        const url = `/jobs/undo-complete/${jobId}`;
        return axiosClient({
            url,
            method: 'patch'
        });
    },
};

export default jobApi;