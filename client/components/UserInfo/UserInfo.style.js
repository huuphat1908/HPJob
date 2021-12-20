import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    padding-top: 70px;
    background: ${GlobalStyle.color.darkGrey};
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    padding: 10px;
`;

export const InfoLine = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    background: ${GlobalStyle.color.lightGrey};
`;

export const InfoText = styled.View`
    width: 80%;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${GlobalStyle.color.darkGrey};
    font-weight: bold;
    margin-bottom: 3px;
`;

export const Detail = styled.Text`
    color: ${GlobalStyle.color.darkGrey};
`;

export const InfoIcon = styled.View`
    width: 20%;
    justify-content: center;
    align-items: center;
`;