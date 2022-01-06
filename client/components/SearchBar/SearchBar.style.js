import styled from 'styled-components/native';
import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    width: 90%;
    height: 40px;
    align-self: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${GlobalStyle.color.lightGrey};
    border-radius: 15px;
    margin-top: 20px;
`;

export const IconWrapper = styled.View`
    width: 15%;
    align-items: center;
`;

export const InputWrapper = styled.View`
    width: 85%;
`;

export const Input = styled.TextInput`
    color: ${GlobalStyle.color.blue};
    padding-right: 10px;
`;