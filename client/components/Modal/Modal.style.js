import styled from 'styled-components/native';
import GlobalStyle from '../../GlobalStyle';

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: ${props => props.content ? '4px' : '20px'};
    align-self: center;
`;

export const Content = styled.Text`
    margin-bottom: 25px;
    align-self: center;
`;

export const InputWrapper = styled.View`
    width: 100%;
    background: ${GlobalStyle.color.white};
    border-radius: 12px;
    height: 30px;
    margin-bottom: 30px;
    justify-content: center;
    padding: 20px;
`;

export const Input = styled.TextInput`
    height: 20px;
    color: ${GlobalStyle.color.darkGrey};
`;

export const ContainerButton = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

export const CancelButton = styled.TouchableOpacity`
    padding: 5px 0;
    width: 45%;
    border-radius: 10px;
    align-items: center;
    background: ${GlobalStyle.color.grey};
`;

export const AcceptButton = styled.TouchableOpacity`
    padding: 5px 0;
    width: 45%;
    border-radius: 10px;
    align-items: center;
    background: ${GlobalStyle.color.pink};
`;

export const TextButton = styled.Text`
    color: ${GlobalStyle.color.white};
`;