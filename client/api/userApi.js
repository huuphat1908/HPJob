import axiosClient from './axiosClient';

const userApi = {
    signIn: (data) => {
        const url = '/users/sign-in';
        return axiosClient({
            url,
            method: 'post',
            data
        });
    },
    arsenal: () => {
        const url = '/users/arsenal';
        return axiosClient({
            url,
            method: 'get'
        })
    }
};

export default userApi;