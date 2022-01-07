import React from 'react';
import { ToastAndroid } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';

import { Wrapper, InputWrapper, Input, ErrorText } from './JobForm.style';
import GlobalStyle, { PrimaryButton, PrimaryTextButton } from '../../GlobalStyle';
import { jobSchema } from '../../configs/job';
import jobApi from '../../api/jobApi';
import { getUserInfo } from '../../redux/slices/userSlice';

const SignUpForm = () => {
    const dispatch = useDispatch();

    const jobTitles = useSelector(state => state.jobTitle.current);
    const cities = useSelector(state => state.city.current);

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    minSalary: '',
                    maxSalary: '',
                    city: '',
                }}
                validationSchema={jobSchema}
                onSubmit={async (values) => {
                    try {
                        await jobApi.createJob(values);
                        dispatch(getUserInfo());
                        ToastAndroid.show('Post job successfully!', ToastAndroid.SHORT);
                    } catch (error) {
                        alert(error.response.data.error);
                    }
                }}
            >
                {({ values, handleChange, setFieldValue, handleSubmit, handleBlur, touched, errors }) => (
                    <KeyboardAwareScrollView
                        style={{ width: '100%' }}
                        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <InputWrapper>
                            <Picker
                                style={{
                                    color: GlobalStyle.color.blue,
                                }}
                                name='title'
                                onBlur={handleBlur('title')}
                                selectedValue={values.title}
                                onValueChange={(itemValue) => setFieldValue('title', itemValue)}
                            >
                                <Picker.Item
                                    key={1}
                                    label='Select title...'
                                    value=''
                                />
                                {jobTitles.map(jobTitle =>
                                    <Picker.Item
                                        key={jobTitle._id}
                                        label={jobTitle.title}
                                        value={jobTitle.title}
                                    />
                                )}
                            </Picker>
                        </InputWrapper>
                        {(touched.title && errors.title) ?
                            <ErrorText>{touched.title && errors.title}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Input
                                name='description'
                                placeholder='Description...'
                                multiline={true}
                                numberOfLines={4}
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description}
                            />
                        </InputWrapper>
                        {(touched.description && errors.description) ?
                            <ErrorText>{touched.description && errors.description}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Input
                                name='minSalary'
                                placeholder='Min salary...'
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                keyboardType='numeric'
                                onChangeText={handleChange('minSalary')}
                                onBlur={handleBlur('minSalary')}
                                value={values.minSalary}
                            />
                        </InputWrapper>
                        {(touched.minSalary && errors.minSalary) ?
                            <ErrorText>{touched.minSalary && errors.minSalary}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Input
                                name='maxSalary'
                                placeholder='Max salary...'
                                placeholderTextColor={'#000f5c'}
                                autoCompleteType='off'
                                keyboardType='numeric'
                                onChangeText={handleChange('maxSalary')}
                                onBlur={handleBlur('maxSalary')}
                                value={values.maxSalary}
                            />
                        </InputWrapper>
                        {(touched.maxSalary && errors.maxSalary) ?
                            <ErrorText>{touched.maxSalary && errors.maxSalary}</ErrorText>
                            : null
                        }
                        <InputWrapper>
                            <Picker
                                style={{
                                    color: GlobalStyle.color.blue,
                                }}
                                onBlur={handleBlur('city')}
                                onValueChange={itemValue => setFieldValue('city', itemValue)}
                                selectedValue={values.city}
                            >
                                <Picker.Item
                                    key={1}
                                    label='Select city...'
                                    value=''
                                />
                                {cities.map(city =>
                                    <Picker.Item
                                        key={city._id}
                                        label={city.name}
                                        value={city.name}
                                    />
                                )}
                            </Picker>
                        </InputWrapper>
                        {(touched.city && errors.city) ?
                            <ErrorText>{touched.city && errors.city}</ErrorText>
                            : null
                        }
                        <PrimaryButton onPress={handleSubmit}>
                            <PrimaryTextButton>Confirm</PrimaryTextButton>
                        </PrimaryButton>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
        </Wrapper >
    )
}

export default SignUpForm;