import React from 'react';
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';

import { Wrapper, InputWrapper, Input, ErrorText, TextBtn, ConfirmButton } from './ChangePasswordForm.style';
import { changePasswordSchema } from '../../configs/user';
import userApi from '../../api/userApi';
import GlobalStyle from '../../GlobalStyle';

const ChangePasswordForm = () => {
    return (
        <Wrapper>
            <Formik
                initialValues={{
                    oldPassword: '',
                    newPassword: '',
                    passwordConfirmation: '',
                }}
                validationSchema={changePasswordSchema}
                onSubmit={async (values) => {
                    try {
                        const data = await userApi.changePassword(values);
                        Alert.alert(data.success);
                    } catch(error) {
                        if (error.response.status == 400) {
                            Alert.alert(error.response.data.error);
                        } else {
                            Alert.alert('Something went wrong');
                        }
                    }
                }}
            >
                {({ values, handleChange, handleSubmit, handleBlur, touched, errors }) => (
                    <KeyboardAwareScrollView
                        style={{ width: '100%', paddingTop: 40 }}
                        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <InputWrapper>
                            <Input
                                name='oldPassword'
                                placeholder='Old password...'
                                placeholderTextColor={GlobalStyle.color.white}
                                autoCompleteType='off'
                                secureTextEntry={true}
                                onChangeText={handleChange('oldPassword')}
                                onBlur={handleBlur('oldPassword')}
                                value={values.oldPassword}
                            />
                        </InputWrapper>
                        {(touched.oldPassword && errors.oldPassword) ?
                            <ErrorText>{touched.oldPassword && errors.oldPassword}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Input
                                name='newPassword'
                                placeholder='New password...'
                                secureTextEntry={true}
                                placeholderTextColor={GlobalStyle.color.white}
                                autoCompleteType='off'
                                onChangeText={handleChange('newPassword')}
                                onBlur={handleBlur('newPassword')}
                                value={values.newPassword}
                            />
                        </InputWrapper>
                        {(touched.newPassword && errors.newPassword) ?
                            <ErrorText>{touched.newPassword && errors.newPassword}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Input
                                name='passwordConfirmation'
                                placeholder='Confirm password...'
                                placeholderTextColor={GlobalStyle.color.white}
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
                        <ConfirmButton onPress={handleSubmit}>
                            <TextBtn>Confirm</TextBtn>
                        </ConfirmButton>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
        </Wrapper>
    )
}

export default ChangePasswordForm;
