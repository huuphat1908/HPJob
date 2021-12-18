import axiosClient from './axiosClient';

const userApi = {
    signIn: (email, password) => {
        const url = '/users/sign-in';
        return axiosClient({
            url,
            method: 'post',
            data: {
                email,
                password
            }
        });
    },
    getUserInfo: () => {
        const url = '/users/me';
        return axiosClient({
            url,
            method: 'get'
        })
    }
};

export default userApi;