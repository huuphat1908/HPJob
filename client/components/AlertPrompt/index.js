import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-native';

import { WrapperModal, Wrapper, Title, Input, ButtonContainer, Button, ButtonText } from './AlertPrompt.style';
import userApi from '../../api/userApi';

export const ModalInput = ({ title, acceptText, closeModal }) => {
    const user = useSelector(state => state.user.current);
    const [text, setText] = useState('');

    return (
        <Modal>
            <WrapperModal>
                <Wrapper>
                    <Title>{title}</Title>
                    <Input
                        placeholder={`Enter ${title}...`}
                        onChangeText={text => setText(text)}
                        value={text}
                    />
                    <ButtonContainer>
                        <Button onPress={closeModal}>
                            <ButtonText>Cancel</ButtonText>
                        </Button>
                        <Button>
                            <ButtonText>{acceptText}</ButtonText>
                        </Button>
                    </ButtonContainer>
                </Wrapper>
            </WrapperModal>
        </Modal>
    )
};

export default ModalInput;