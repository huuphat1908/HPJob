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
        backgroundColor: '#eee',
        borderRadius: 21,
        width: '80%',
        height: 40,
        maxHeight: 250,
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
            <Title content={content}>{title}</Title>
            {content ? <Content>{content}</Content> : null}
            <InputWrapper>
                <Input
                    onChangeText={text => handleInput(text)}
                    value={textInput}
                    placeholder={placeholder}
                    placeholderTextColor={GlobalStyle.color.darkGrey}
                />
            </InputWrapper>
            <ContainerButton>
                <CancelButton onPress={() => handleModal(null, null)}>
                    <TextButton>Cancel</TextButton>
                </CancelButton>
                <AcceptButton onPress={() => {
                    handleModal(null, null);
                    callback();
                }}>
                    <TextButton>Confirm</TextButton>
                </AcceptButton>
            </ContainerButton>
        </ModalLib>
    )
}

export default Modal;