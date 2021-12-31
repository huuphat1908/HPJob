import React from 'react';
import { StyleSheet } from 'react-native';
import ModalLib from 'react-native-modal';

import { Title, Content, InputWrapper, Input, ContainerButton, CancelButton, AcceptButton, TextButton } from './Modal.style';

const styles = StyleSheet.create({
    modal: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 150,
        marginBottom: 150,
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fdfdfd',
        borderRadius: 7,
        width: '80%',
    }
});

const Modal = ({ visible, toggleModal, title, content, callback }) => {
    return (
        <ModalLib
            style={styles.modal}
            isVisible={visible}
            onBackdropPress={toggleModal}
        >
            <Title>{title}</Title>
            <Content>{content}</Content>
            <InputWrapper>
                <Input />
            </InputWrapper>
            <ContainerButton>
                <CancelButton onPress={toggleModal}>
                    <TextButton>Cancel</TextButton>
                </CancelButton>
                <AcceptButton onPress={callback}>
                    <TextButton>OK</TextButton>
                </AcceptButton>
            </ContainerButton>
        </ModalLib>
    )
}

export default Modal;