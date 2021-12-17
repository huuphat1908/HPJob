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
};

export default userApi;