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
    padding: 0 10px;
`;

export const Item = styled.View`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    min-height: 30px;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${GlobalStyle.color.green};
`;

export const ItemInfoContainer = styled.View`
    width: 90%;
    flex-direction: column;
`;

export const ItemInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 2px 0;
`;

export const ItemInfoIcon = styled.View`
    width: 30px;
`;

export const ItemInfoText = styled.Text`
    font-size: 16px;
    color: ${GlobalStyle.color.white};
`;

export const ItemIconWrapper = styled.View`
    flex-direction: row;
    width: 10%;
`;

export const ItemIcon = styled.TouchableOpacity`
    margin-left: 5px;
`;