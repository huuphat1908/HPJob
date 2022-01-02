import React from 'react';
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Wrapper, Content, Item, ItemText, ItemIconWrapper, ItemIcon } from './ListItem.style';
import GlobalStyle from '../../GlobalStyle';

const ListItem = ({ data, editCallback, deleteCallback }) => {
    const alertDelete = (id) => {
        Alert.alert(
            'Delete job title',
            'Are you sure to delete?',
            [
                {
                    text: 'Cancel',
                },
                { text: 'OK', onPress: () => deleteCallback(id) }
            ]
        );
    };

    const renderItem = ({ item }) => {
        return (
            <Item>
                <ItemText>{item.title}</ItemText>
                <ItemIconWrapper>
                    <ItemIcon onPress={(newValue) => editCallback(item._id, newValue)}>
                        <MaterialIcons name='edit' size={28} color={GlobalStyle.color.white} />
                    </ItemIcon>
                    <ItemIcon onPress={() => alertDelete(item._id)}>
                        <MaterialIcons name='delete' size={28} color={GlobalStyle.color.white} />
                    </ItemIcon>
                </ItemIconWrapper>
            </Item>
        )
    }

    return (
        <Wrapper>
            <Content
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </Wrapper>
    )
}

export default ListItem;