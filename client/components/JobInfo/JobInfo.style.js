import styled from 'styled-components/native';
import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    flex: 1;
`;

export const Content = styled.ScrollView`
    padding-left: 10px;
    padding-right: 10px;
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