import React from 'react';
import { ToastAndroid } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { useSelector } from 'react-redux';

import { Wrapper, InputWrapper, ErrorText } from './FilterJob.style';
import GlobalStyle, { PrimaryButton, PrimaryTextButton } from '../../GlobalStyle';

const FilterJob = ({ handleFilter, handleModal }) => {
    const jobTitles = useSelector(state => state.jobTitle.current);
    const cities = useSelector(state => state.city.current);

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    title: '',
                    type: '',
                    city: '',
                }}
                onSubmit={async (values) => {
                    try {
                        const { title, type, city } = values;
                        handleFilter(title, type, city);
                        handleModal();
                        ToastAndroid.show('Filter job successfully!', ToastAndroid.SHORT);
                    } catch (error) {
                        alert('Something went wrong');
                    }
                }}
            >
                {({ values, setFieldValue, handleSubmit, handleBlur }) => (
                    <KeyboardAwareScrollView
                        style={{ width: '100%' }}
                        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <InputWrapper>
                            <Picker
                                style={{
                                    color: GlobalStyle.color.blue
                                }}
                                name='title'
                                onBlur={() => setTimeout(() => handleBlur('title'), 1000)}
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
                        <InputWrapper>
                            <Picker
                                style={{
                                    color: GlobalStyle.color.blue,
                                }}
                                name='type'
                                onBlur={() => setTimeout(() => handleBlur('type'), 1000)}
                                selectedValue={values.type}
                                onValueChange={(itemValue) => setFieldValue('type', itemValue)}
                            >
                                <Picker.Item
                                    key={1}
                                    label='Select type...'
                                    value=''
                                />
                                <Picker.Item
                                    key={2}
                                    label='Part-time'
                                    value='Part-time'
                                />
                                <Picker.Item
                                    key={3}
                                    label='Full-time'
                                    value='Full-time'
                                />
                            </Picker>
                        </InputWrapper>
                        <InputWrapper>
                            <Picker
                                style={{
                                    color: GlobalStyle.color.blue,
                                }}
                                onBlur={() => setTimeout(() => handleBlur('city'), 1000)}
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
                        <PrimaryButton onPress={handleSubmit}>
                            <PrimaryTextButton>Filter</PrimaryTextButton>
                        </PrimaryButton>
                    </KeyboardAwareScrollView>
                )}
            </Formik>
        </Wrapper >
    )
}

export default FilterJob;