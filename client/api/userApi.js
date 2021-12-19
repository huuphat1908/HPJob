import axiosClient from './axiosClient';

const userApi = {
    signUp: (username, email, password, phoneNumber) => {
        const url = '/users/sign-up';
        return axiosClient({
            url,
            method: 'post',
            data: {
                username,
                email,
                password,
                phoneNumber
            }
        });
    },
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