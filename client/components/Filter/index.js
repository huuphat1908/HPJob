import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';

import { Wrapper, Content, Title, RefreshWrapper } from './Filter.style';
import GlobalStyle from '../../GlobalStyle';

const Filter = ({ title, callback, refreshCallback }) => {
    return (
        <Wrapper>
            <Content onPress={callback}>
                <AntDesign name='filter' size={24} color={GlobalStyle.color.grey} />
                <Title>{title ? title : 'Filter'}</Title>
            </Content>
            <RefreshWrapper onPress={refreshCallback}>
                <Feather name='refresh-cw' size={24} color={GlobalStyle.color.grey} />
            </RefreshWrapper>
        </Wrapper>
    )
};

export default Filter;