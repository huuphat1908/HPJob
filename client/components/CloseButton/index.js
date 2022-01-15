import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Wrapper } from './CloseButton.style';
import GlobalStyle from '../../GlobalStyle';

const CloseButton = ({ callback, size }) => {
    return (
        <Wrapper>
            <AntDesign
                name='close'
                size={parseInt(size) || 32}
                color={GlobalStyle.color.white}
                onPress={callback}
            />
        </Wrapper>
    )
};

export default CloseButton;