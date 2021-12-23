import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    padding-top: 70px;
    background: ${GlobalStyle.color.white};
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
    min-height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    background: ${GlobalStyle.color.green};
`;

export const InfoText = styled.View`
    width: 80%;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${GlobalStyle.color.white};
    font-weight: bold;
    margin-bottom: 3px;
`;

export const Detail = styled.Text`
    color: ${GlobalStyle.color.white};
`;

export const InfoIcon = styled.View`
    width: 20%;
    justify-content: center;
    align-items: center;
`;

export const EditUserWrapper = styled.TouchableOpacity`
    width: 80%;
    background-color: ${GlobalStyle.color.pink};
    border-radius: 25px;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const EditUserText = styled.Text`
    color: ${GlobalStyle.color.white};
    font-size: 16px;
`;