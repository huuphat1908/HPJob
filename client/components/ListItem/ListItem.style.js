import styled from 'styled-components/native';
import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.FlatList`
    width: 100%;
    padding: 30px 0;
`;

export const Item = styled.View`
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    min-height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${GlobalStyle.color.green};
`;

export const ItemText = styled.Text`
    font-size: 20px;
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