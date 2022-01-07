import axiosClient from './axiosClient';

const jobApi = {
    createJob: (data) => {
        const url = '/jobs';
        return axiosClient({
            url,
            method: 'post',
            data: {...data}
        });
    }
};

export default jobApi;