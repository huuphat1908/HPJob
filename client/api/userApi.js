import axiosClient from './axiosClient';

const userApi = {
    signIn: (data) => {
        const url = '/users';
        return axiosClient({
            url,
            method: 'post',
            data
        });
    }
};

export default userApi;