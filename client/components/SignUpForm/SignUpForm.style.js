import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    justify-content: center;
    align-items: center;
    background: #003f5c;
    height: ${props => props.safeAreaHeight}px;
`;

export const Title = styled.Text`
    font-size: ${GlobalStyle.dimen.fontSuperBig};
    font-weight: bold;
    color: #fb5b5a;
    margin-bottom: 40px;
`;

export const InputWrapper = styled.View`
    width: 80%;
    background: white;
    border-radius: 25px;
    height: 60px;
    margin-bottom: 20px;
    justify-content: center;
    padding: 20px;
`;

export const Input = styled.TextInput`
    height: 50px;
    color: #465881;
`;

export const ErrorText = styled.Text`
    color: red;
    padding-bottom: 20px;
`;

export const TextBtn = styled.Text`
    color: white;
    font-size: 16px;
`;

export const LoginBtn = styled.TouchableOpacity`
    width: 80%;
    background-color: #fb5b5a;
    border-radius: 25px;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;