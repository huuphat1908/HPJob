import axiosClient from './axiosClient';

const userApi = {
    signUp: (username, email, password) => {
        const url = '/users/sign-up';
        return axiosClient({
            url,
            method: 'post',
            data: {
                username,
                email,
                password,
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
    },

    modifyUser: (user) => {
        const url = '/users';
        return axiosClient({
            url,
            method: 'patch',
            data: user
        })
    }
};

export default userApi;