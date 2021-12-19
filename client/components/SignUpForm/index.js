import React from 'react';
import { TouchableWithoutFeedback, Keyboard, Dimensions, StatusBar, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-native';

import { Wrapper, Title, InputWrapper, Input, ErrorText, LoginBtn, TextBtn } from './SignUpForm.style';
import { signUp } from '../../redux/slices/userSlice';

let loginSchema = yup.object({
    username: yup.string().required().min(5),
    email: yup.string().required().email(),
    phoneNumber: yup.string().length(10),
    password: yup.string().required().min(6).max(20),
});

const SignUpForm = () => {
    const dispatch = useDispatch();

    const windowHeight = Dimensions.get('window').height;
    const offSetTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
    const safeAreaHeight = parseInt(windowHeight) - parseInt(offSetTop);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={async (values, actions) => {
                        try {
                            await dispatch(signUp(values)).unwrap();
                            actions.resetForm();
                            alert('Sign up successfully');
                        } catch (error) {
                            if (error.message == 'Request failed with status code 409') {
                                alert('This email is already registered');
                            }
                            else {
                                alert('Something went wrong');
                                console.log(error);
                            }
                        }
                    }}
                >
                    {({ values, handleChange, handleSubmit, handleBlur, touched, errors }) => (
                        <Wrapper safeAreaHeight={safeAreaHeight}>
                            <Title>HPJob</Title>
                            <InputWrapper>
                                <Input
                                    name='username'
                                    placeholder='Username...'
                                    placeholderTextColor={'#000f5c'}
                                    autoCompleteType='off'
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                />
                            </InputWrapper>
                            {(touched.username && errors.username) ?
                                <ErrorText>{touched.username && errors.username}</ErrorText>
                                : null
                            }
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
                                    name='phoneNumber'
                                    placeholder='Phone number...'
                                    placeholderTextColor={'#000f5c'}
                                    autoCompleteType='off'
                                    keyboardType='numeric'
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    value={values.phoneNumber}
                                />
                            </InputWrapper>
                            {(touched.phoneNumber && errors.phoneNumber) ?
                                <ErrorText>{touched.phoneNumber && errors.phoneNumber}</ErrorText>
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
                            <LoginBtn onPress={handleSubmit}>
                                <TextBtn>Sign up</TextBtn>
                            </LoginBtn>
                            <Link to='/login'>
                                <TextBtn>Back to login</TextBtn>
                            </Link>
                        </Wrapper>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}

export default SignUpForm;