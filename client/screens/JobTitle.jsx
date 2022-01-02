import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '../components/ListItem';
import Modal from '../components/Modal';
import { PrimaryButton, PrimaryTextButton } from '../GlobalStyle';
import jobTitleApi from '../api/jobTitleApi';
import { getAllJobTitle } from '../redux/slices/jobTitleSlice';

const JobTitle = () => {
    const dispatch = useDispatch();

    const jobTitles = useSelector(state => state.jobTitle.current);
    const [visibleModal, setVisibleModal] = useState(false);
    const [jobTitle, setJobTitle] = useState('');

    const handleModal = () => {
        setVisibleModal(!visibleModal);
    }

    const addJobTitle = async () => {
        try {
            await jobTitleApi.createJobTitle(jobTitle);
            Alert.alert('Add successfully');
            setJobTitle('');
            dispatch(getAllJobTitle());
        } catch(error) {
            Alert.alert(error.response.data.error);
        }
    };

    const editJobTitle = async (id, newValue) => {
        try {
            await jobTitleApi.modifyJobTitle(id, newValue);
            Alert.alert('Edit successfully');
            dispatch(getAllJobTitle());
        } catch (error) {
            Alert.alert(error.response.data.error);
        }
    };

    const deleteJobTitle = async (id) => {
        try {
            await jobTitleApi.deleteJobTitle(id);
            Alert.alert('Delete successfully');
            dispatch(getAllJobTitle());
        } catch(error) {
            console.log(error);
            Alert.alert(error.response.data.error);
        }
    };

    return (
        <>
            <Modal
                visible={visibleModal}
                handleModal={handleModal}
                textInput={jobTitle}
                handleInput={(text) => setJobTitle(text)}
                title='Job title'
                content='Add job title'
                placeholder='Job title...'
                callback={addJobTitle}
            />
            <ListItem
                data={jobTitles}
                editCallback={editJobTitle}
                deleteCallback={deleteJobTitle}
            />
            <PrimaryButton onPress={handleModal}>
                <PrimaryTextButton>Add job title</PrimaryTextButton>
            </PrimaryButton>
        </>
    )
};

export default JobTitle;