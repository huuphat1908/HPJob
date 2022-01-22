import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    padding: 15px 0;
    background: ${GlobalStyle.color.blue};
    flex: 1;
    height: ${GlobalStyle.safeAreaHeight}px;
`;

export const Content = styled.FlatList`
    padding: 10px 0;
`;

export const Item = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    min-height: 70px;
    padding: 0px 20px;
    margin-bottom: 20px;
`;

export const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border-width: 2px;
    border-color: #fff;
    align-self: center;
`;

export const InfoWrapper = styled.View`
    justify-content: center;
    margin-left: 10px;
    flex: 1;
`;

export const PrimaryText = styled.Text`
    font-size: 16px;
    color: ${GlobalStyle.color.white};
`;

export const SecondaryText = styled.Text`
    font-size: 14px;
    color: ${GlobalStyle.color.grey};
`;

export const IconWrapper = styled.TouchableOpacity`
    justify-content: center;
    margin: 0 7px;
`;

export const ItemFunction = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    height: 50px;
`;

export const FunctionText = styled.Text`
    font-size: 16px;
    color: ${GlobalStyle.color.grey};
`;
