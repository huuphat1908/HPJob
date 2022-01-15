import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Wrapper, Title } from './NoItem.style';

const NoItem = ({ title, color }) => {
    return (
        <Wrapper>
            <FontAwesome5 name='frown' size={80} color={color} />
            <Title color={color}>{title ? title : 'No item'}</Title>
        </Wrapper>
    )
};

export default NoItem;