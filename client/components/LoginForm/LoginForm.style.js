import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    margin-top: ${props => props.offSetTop}px;
    justify-content: center;
    align-items: center;
    background: #003f5c;
    flex: 1;
`;

export const Title = styled.Text`
    font-size: ${GlobalStyle.dimen.fontSuperBig};
    font-weight: bold;
    color: #fb5b5a;
    margin-bottom: 40px;
`;

export const InputWrapper = styled.View`
    width: 80%;
    background: #465881;
    border-radius: 25px;
    height: 60px;
    margin-bottom: 20px;
    justify-content: center;
    padding: 20px;
`;

export const Input = styled.TextInput`
    height: 50px;
    color: white;
`;

export const ForgotPassword = styled.Text`
    color: white;
    font-size: 11px;
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
    margin-top: 40px;
    margin-bottom: 10px;
`;