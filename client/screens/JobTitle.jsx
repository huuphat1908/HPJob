import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '../components/ListItem';
import Modal from '../components/Modal';
import { PrimaryButton, PrimaryTextButton } from '../GlobalStyle';
import jobTitleApi from '../api/jobTitleApi';
import { getAllJobTitle } from '../redux/slices/jobTitleSlice';

const JobTitle = () => {
    const dispatch = useDispatch();

    const jobTitles = useSelector(state => state.jobTitle.current);
    const [visibleAddModal, setVisibleAddModal] = useState(false);
    const [visibleEditModal, setVisibleEditModal] = useState(false);
    const [jobTitle, setJobTitle] = useState('');
    const [editableJobTitle, setEditableJobTitle] = useState({
        id: '',
        title: ''
    });

    const handleAddModal = () => {
        setVisibleAddModal(!visibleAddModal);
    };

    const handleEditModal = (oldValue, id) => {
        setVisibleEditModal(!visibleEditModal);
        if (oldValue) {
            setEditableJobTitle({
                ...editableJobTitle,
                title: oldValue,
                id
            });
        }
    };

    const addJobTitle = async () => {
        try {
            await jobTitleApi.createJobTitle(jobTitle);
            ToastAndroid.show('Add successfully', ToastAndroid.BOTTOM);
            setJobTitle('');
            dispatch(getAllJobTitle());
        } catch(error) {
            alert(error.response.data.error);
        }
    };

    const editJobTitle = async () => {
        try {
            await jobTitleApi.modifyJobTitle(editableJobTitle.id, editableJobTitle.title);
            ToastAndroid.show('Edit successfully', ToastAndroid.BOTTOM);
            dispatch(getAllJobTitle());
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    const deleteJobTitle = async (id) => {
        try {
            await jobTitleApi.deleteJobTitle(id);
            ToastAndroid.show('Delete successfully', ToastAndroid.BOTTOM);
            dispatch(getAllJobTitle());
        } catch(error) {
            console.log(error);
            alert(error.response.data.error);
        }
    };

    return (
        <>
            <Modal
                visible={visibleAddModal}
                handleModal={handleAddModal}
                textInput={jobTitle}
                handleInput={(text) => setJobTitle(text)}
                title='Add job title'
                placeholder='Job title...'
                callback={addJobTitle}
            />
            <Modal
                visible={visibleEditModal}
                handleModal={handleEditModal}
                textInput={editableJobTitle.title}
                handleInput={(text) => setEditableJobTitle({
                    ...editableJobTitle,
                    title: text
                })}
                title='Edit job title'
                callback={editJobTitle}
            />
            <ListItem
                data={jobTitles}
                editCallback={handleEditModal}
                deleteCallback={deleteJobTitle}
            />
            <PrimaryButton onPress={handleAddModal}>
                <PrimaryTextButton>Add job title</PrimaryTextButton>
            </PrimaryButton>
        </>
    )
};

export default JobTitle;