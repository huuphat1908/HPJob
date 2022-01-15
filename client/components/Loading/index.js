import React from 'react';
import * as Progress from 'react-native-progress';

import { Wrapper } from './Loading.style';

const Loading = ({ size }) => {
    return (
        <Wrapper>
            <Progress.Circle size={size ? parseInt(size) : 70} indeterminate={true} />
        </Wrapper>
    )
};

export default Loading;