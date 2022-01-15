import styled from 'styled-components/native';
import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

export const Content = styled.FlatList`
    width: 100%;
`;

export const Item = styled.View`
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    min-height: 30px;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${GlobalStyle.color.green};
`;

export const ItemText = styled.Text`
    font-size: 18px;
    width: 80%;
    color: ${GlobalStyle.color.white};
`;

export const ItemIconWrapper = styled.View`
    flex-direction: row;
    width: 20%;
`;

export const ItemIcon = styled.TouchableOpacity`
    margin-left: 5px;
`;