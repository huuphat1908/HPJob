import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 28px;
    margin-top: 24px;
    color: ${props => props.color};
`;