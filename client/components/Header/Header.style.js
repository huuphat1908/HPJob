import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    height: 70px;
    background: ${GlobalStyle.color.blue};
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24px;
`;

export const Title = styled.Text`
    color: ${GlobalStyle.color.white};
    padding-left: 24px;
    font-size: ${GlobalStyle.dimen.fontMed};
    font-weight: 700;
`;