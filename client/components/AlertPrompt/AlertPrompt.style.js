import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const WrapperModal = styled.View`
    flex: 1;
    background: ${GlobalStyle.color.lightGrey};
`;

export const Wrapper = styled.View`
    width: 320px;
    margin: auto auto;
    background: ${GlobalStyle.color.darkGrey};
    border-radius: 15px;
    padding: 0 20px;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: ${GlobalStyle.color.red};
    margin: 10px auto;
    text-transform: capitalize;
`;

export const Input = styled.TextInput`
    width: 100%;
    background: white;
    border-radius: 25px;
    height: 40px;
    margin-bottom: 20px;
    justify-content: center;
    padding: 7px 12px;
    border: 1px solid black;
    margin: 12px auto;
    color: ${GlobalStyle.color.medGrey};
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding: 20px 0;
`;

export const Button = styled.TouchableOpacity`
    margin-left: 24px;
    padding: 0 5px;
`;

export const ButtonText = styled.Text`
    color: white;
    text-transform: uppercase;
`;