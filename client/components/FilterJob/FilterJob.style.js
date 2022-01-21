import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    padding-top: 50px;
    background: ${GlobalStyle.color.blue};
    flex: 1;
    height: ${GlobalStyle.safeAreaHeight}px;
`;

export const InputWrapper = styled.View`
    width: 80%;
    background: ${GlobalStyle.color.white};
    border-radius: 25px;
    height: 60px;
    margin-bottom: 20px;
    justify-content: center;
    padding: 20px;
`;

export const Input = styled.TextInput`
    height: 50px;
    color: ${GlobalStyle.color.blue};
`;

export const ErrorText = styled.Text`
    color: red;
    padding-bottom: 20px;
`;