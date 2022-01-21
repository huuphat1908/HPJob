import styled from 'styled-components/native';
import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    width: 100%;
    padding: 10px 24px;
    background: ${GlobalStyle.color.lightGrey};
`;

export const Content = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 16px;
    margin-left: 5px;
    color: ${GlobalStyle.color.grey};
`;