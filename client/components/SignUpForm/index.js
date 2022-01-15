import React from 'react';
import { ToastAndroid } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-native';

import { Wrapper, Title, InputWrapper, Input, ErrorText, LoginBtn, TextBtn } from './SignUpForm.style';
import { signUp } from '../../redux/slices/userSlice';
import { signUpSchema } from '../../configs/user';

const SignUpForm = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Formik
                initialValues={{ username: '', email: '', password: '', passwordConfirmation: '' }}
                validationSchema={signUpSchema}
                onSubmit={async (values, actions) => {
                    try {
                        await dispatch(signUp(values)).unwrap();
                        actions.resetForm();
                        ToastAndroid.show('Sign up successfully', ToastAndroid.BOTTOM);
                    } catch (error) {
                            alert(error.response.data.error);
                            console.log(error.response.data.error);
                    }
                }}
            >
                {({ values, handleChange, handleSubmit, handleBlur, touched, errors }) => (
                    <KeyboardAwareScrollView
                        style={{ width: '100%' }}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
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
                        <InputWrapper>
                            <Input
                                name='passwordConfirmation'
                                placeholder='Confirm password...'
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                secureTextEntry={true}
                                onChangeText={handleChange('passwordConfirmation')}
                                onBlur={handleBlur('passwordConfirmation')}
                                value={values.passwordConfirmation}
                            />
                        </InputWrapper>
                        {(touched.passwordConfirmation && errors.passwordConfirmation) ?
                            <ErrorText>{touched.passwordConfirmation && errors.passwordConfirmation}</ErrorText>
                            : null
                        }
                        <LoginBtn onPress={handleSubmit}>
                            <TextBtn>Sign up</TextBtn>
                        </LoginBtn>
                        <Link to='/login'>
                            <TextBtn>Back to login</TextBtn>
                        </Link>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
        </Wrapper>
    )
}

export default SignUpForm;