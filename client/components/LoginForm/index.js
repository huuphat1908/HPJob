import React from 'react';
import { TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import * as SecureStore from 'expo-secure-store';
import { Link } from 'react-router-native';

import { Wrapper, Title, InputWrapper, Input, ErrorText, ForgotPassword, LoginBtn, TextBtn } from './LoginForm.style';
import { signIn } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-native';

let loginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20)
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Wrapper safeAreaHeight={safeAreaHeight}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    try {
                        const data = await dispatch(signIn(values)).unwrap();
                        await SecureStore.setItemAsync('token', data.token);
                        navigate('/');
                    } catch (error) {
                        alert('Wrong email or password');
                        console.log(error);
                    }
                }}
            >
                {({ values, handleChange, handleSubmit, handleBlur, touched, errors }) => (
                    <KeyboardAwareScrollView
                        style={{ width: '100%' }}
                        contentContainerStyle={{ flexGrow: 1,  justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Title>HPJob</Title>
                        <InputWrapper>
                            <Input
                                name='email'
                                placeholder='Email...'
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </InputWrapper>
                        {(touched.email && errors.email) ?
                            <ErrorText>{touched.email && errors.email}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Input
                                name='password'
                                placeholder='Password...'
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </InputWrapper>
                        {(touched.password && errors.password) ?
                            <ErrorText>{touched.password && errors.password}</ErrorText>
                            : null
                        }
                        <TouchableOpacity>
                            <ForgotPassword>Forgot Password?</ForgotPassword>
                        </TouchableOpacity>
                        <LoginBtn onPress={handleSubmit}>
                            <TextBtn>Login</TextBtn>
                        </LoginBtn>
                        <Link to='/sign-up'>
                            <TextBtn>Signup</TextBtn>
                        </Link>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
        </Wrapper>
    )
}

export default LoginForm;