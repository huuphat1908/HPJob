import React, { useState } from 'react';
import { Modal, TouchableOpacity, ToastAndroid } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import { Wrapper } from './JobPosted.style';
import GlobalStyle, { PrimaryButton, PrimaryTextButton } from '../../GlobalStyle';
import JobForm from '../JobForm';
import ListJobPosted from '../ListJobPosted';
import jobApi from '../../api/jobApi';
import { getUserInfo } from '../../redux/slices/userSlice';

const JobPosted = () => {
    const dispatch = useDispatch();

    const [visibleModal, setVisibleModal] = useState(false);
    const currentUser = useSelector(state => state.user.current);

    const handleModal = () => {
        setVisibleModal(!visibleModal);
    }

    const handleCompleteJob = async (jobId) => {
        try {
            const data = await jobApi.completeJob(jobId);
            dispatch(getUserInfo());
            ToastAndroid.show(data.success, ToastAndroid.BOTTOM);
        } catch(error) {
            alert(error.response.data.error);
        }
    };

    const handleUndoCompleteJob = async (jobId) => {
        try {
            const data = await jobApi.undoCompleteJob(jobId);
            dispatch(getUserInfo());
            ToastAndroid.show(data.success, ToastAndroid.BOTTOM);
        } catch(error) {
            alert(error.response.data.error);
        }
    };

    return (
        <>
            <Modal visible={visibleModal} animationType='slide'>
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10, zIndex: 100 }}>
                    <AntDesign name='close' size={32} color={GlobalStyle.color.white} onPress={handleModal} />
                </TouchableOpacity>
                <JobForm />
            </Modal>
            <Wrapper>
                <ListJobPosted
                    data={currentUser.jobPosted}
                    completeCallback={handleCompleteJob}
                    undoCompleteCallback={handleUndoCompleteJob}
                    noItemFoundTitle='No job posted'
                />
                <PrimaryButton onPress={handleModal}>
                    <PrimaryTextButton>Post job</PrimaryTextButton>
                </PrimaryButton>
            </Wrapper>
        </>
    );
};

export default JobPosted;