import React from 'react';
import { Dimensions, StatusBar, Platform, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, InputWrapper, Input, ErrorText, LoginBtn, TextBtn } from './UserForm.style';
import userSchema from '../../configs/user';
import userApi from '../../api/userApi';
import { getUserInfo } from '../../redux/slices/userSlice';

const SignUpForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.current);

    const windowHeight = Dimensions.get('window').height;
    const offSetTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
    const safeAreaHeight = parseInt(windowHeight) - parseInt(offSetTop);

    return (
        <Wrapper safeAreaHeight={safeAreaHeight}>
            <Formik
                initialValues={{
                    username: user.username,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    jobTitle: user.jobTitle,
                    coverLetter: user.coverLetter,
                    portfolio: user.portfolio
                }}
                validationSchema={userSchema}
                onSubmit={async (values) => {
                    try {
                        await userApi.modifyUser({ ...user, ...values });
                        dispatch(getUserInfo());
                        alert('Change info successfully');
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
                    <KeyboardAwareScrollView
                        style={{ width: '100%' }}
                        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <InputWrapper>
                            <Input
                                name='username'
                                placeholder='Username...'
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                defaultValue={user.username}
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
                                defaultValue={user.phoneNumber}
                            />
                        </InputWrapper>
                        {(touched.phoneNumber && errors.phoneNumber) ?
                            <ErrorText>{touched.phoneNumber && errors.phoneNumber}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Input
                                name='jobTitle'
                                placeholder='Job title...'
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                onChangeText={handleChange('jobTitle')}
                                onBlur={handleBlur('jobTitle')}
                                value={values.jobTitle}
                                defaultValue={user.jobTitle}
                            />
                        </InputWrapper>
                        {(touched.jobTitle && errors.jobTitle) ?
                            <ErrorText>{touched.jobTitle && errors.jobTitle}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Input
                                name='coverLetter'
                                placeholder='Cover letter...'
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                onChangeText={handleChange('coverLetter')}
                                onBlur={handleBlur('coverLetter')}
                                value={values.coverLetter}
                                defaultValue={user.coverLetter}
                            />
                        </InputWrapper>
                        {(touched.coverLetter && errors.coverLetter) ?
                            <ErrorText>{touched.coverLetter && errors.coverLetter}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Input
                                name='portfolio'
                                placeholder='Portfolio...'
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                onChangeText={handleChange('portfolio')}
                                onBlur={handleBlur('portfolio')}
                                value={values.portfolio}
                                defaultValue={user.portfolio}
                            />
                        </InputWrapper>
                        {(touched.portfolio && errors.portfolio) ?
                            <ErrorText>{touched.portfolio && errors.portfolio}</ErrorText>
                            : null
                        }
                        <LoginBtn onPress={handleSubmit}>
                            <TextBtn>Change info</TextBtn>
                        </LoginBtn>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
        </Wrapper>
    )
}

export default SignUpForm;