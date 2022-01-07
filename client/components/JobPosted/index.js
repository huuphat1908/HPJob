import React, { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Wrapper, Content } from './JobPosted.style';
import GlobalStyle, { PrimaryButton, PrimaryTextButton } from '../../GlobalStyle';
import JobForm from '../JobForm';

const JobPosted = () => {
    const [visibleModal, setVisibleModal] = useState(false);

    const handleModal = () => {
        setVisibleModal(!visibleModal);
    }

    return (
        <>
            <Modal visible={visibleModal} animationType='slide'>
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10, zIndex: 100 }}>
                    <AntDesign name='close' size={32} color={GlobalStyle.color.white} onPress={handleModal} />
                </TouchableOpacity>
                <JobForm />
            </Modal>
            <Wrapper>
                <Content
                    
                />
                <PrimaryButton onPress={handleModal}>
                    <PrimaryTextButton>Post job</PrimaryTextButton>
                </PrimaryButton>
            </Wrapper>
        </>
    );
};

export default JobPosted;