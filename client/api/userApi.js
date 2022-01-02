import FormData from 'form-data';

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

    resetPassword: ({ email }) => {
        const url = '/users/reset-password';
        return axiosClient({
            url,
            method: 'patch',
            data: {
                email
            }
        });
    },

    changePassword: ({ oldPassword, newPassword, passwordConfirmation }) => {
        const url = '/users/change-password';
        return axiosClient({
            url,
            method: 'patch',
            data: {
                oldPassword,
                newPassword,
                passwordConfirmation
            }
        });
    },

    getUserInfo: () => {
        const url = '/users/me';
        return axiosClient({
            url,
            method: 'get'
        });
    },

    modifyUser: (user) => {
        const url = '/users';
        return axiosClient({
            url,
            method: 'patch',
            data: user
        });
    },

    setBackground: (backgroundUri) => {
        const url = '/users/background';
        const data = new FormData();
        const backgroundUriArray = backgroundUri.split('/');
        const filename = backgroundUriArray[backgroundUriArray.length - 1];
        data.append('background', {
            uri: backgroundUri,
            type: 'image/jpeg',
            name: `${filename}`
        });
        return axiosClient({
            url,
            method: 'patch',
            data,
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    },

    setAvatar: (avatarUri) => {
        const url = '/users/avatar';
        const data = new FormData();
        const avatarUriArray = avatarUri.split('/');
        const filename = avatarUriArray[avatarUriArray.length - 1];
        data.append('avatar', {
            uri: avatarUri,
            type: 'image/jpeg',
            name: `${filename}`
        });
        return axiosClient({
            url,
            method: 'patch',
            data,
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    }
};

export default userApi;