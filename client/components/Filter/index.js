import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Wrapper, Content, Title } from './Filter.style';
import GlobalStyle from '../../GlobalStyle';

const Filter = ({ title, callback }) => {
    return (
        <Wrapper>
            <Content onPress={callback}>
                <AntDesign name='filter' size={24} color={GlobalStyle.color.grey} />
                <Title>{title ? title : 'Filter'}</Title>
            </Content>
        </Wrapper>
    )
};

export default Filter;