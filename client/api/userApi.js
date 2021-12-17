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
        return axiosClient.get(url);
    }
};

export default userApi;