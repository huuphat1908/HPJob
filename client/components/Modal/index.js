import React from 'react';
import { StyleSheet } from 'react-native';
import ModalLib from 'react-native-modal';

import { Title, Content, InputWrapper, Input, ContainerButton, CancelButton, AcceptButton, TextButton } from './Modal.style';
import GlobalStyle from '../../GlobalStyle';

const styles = StyleSheet.create({
    modal: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fdfdfd',
        borderRadius: 7,
        width: '80%',
        height: 40,
        maxHeight: 280,
    }
});

const Modal = ({ visible, handleModal, textInput, handleInput, title, content, placeholder, callback }) => {

    return (
        <ModalLib
            style={styles.modal}
            isVisible={visible}
            onBackdropPress={handleModal}
            propagateSwipe
        >
            <Title>{title}</Title>
            <Content>{content}</Content>
            <InputWrapper>
                <Input
                    onChangeText={text => handleInput(text)}
                    value={textInput}
                    placeholder={placeholder}
                    placeholderTextColor={GlobalStyle.color.white}
                />
            </InputWrapper>
            <ContainerButton>
                <CancelButton onPress={handleModal}>
                    <TextButton>Cancel</TextButton>
                </CancelButton>
                <AcceptButton onPress={callback}>
                    <TextButton>Confirm</TextButton>
                </AcceptButton>
            </ContainerButton>
        </ModalLib>
    )
}

export default Modal;