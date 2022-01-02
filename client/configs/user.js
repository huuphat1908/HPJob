import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
});

export const signUpSchema = yup.object({
    username: yup.string().required().min(5),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    passwordConfirmation: yup.string().required().oneOf([yup.ref('password'), null], 'Password and confirm password must be same')
});

export const userSchema = yup.object({
    username: yup.string().required().min(5),
    email: yup.string().required().email(),
    phoneNumber: yup.string().length(10),
    jobTitle: yup.string(),
    coverLetter: yup.string(),
    portfolio: yup.string()
});

export const changePasswordSchema = yup.object({
    oldPassword: yup.string().required().min(6),
    newPassword: yup.string().required().min(6),
    passwordConfirmation: yup.string().required().oneOf([yup.ref('newPassword'), null], 'New password and confirm password must be same')
});