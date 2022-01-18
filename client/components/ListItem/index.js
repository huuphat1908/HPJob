import React from 'react';
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Wrapper, Content, Item, ItemText, ItemIconWrapper, ItemIcon } from './ListItem.style';
import GlobalStyle from '../../GlobalStyle';
import NoItem from '../NoItem';

const ListItem = ({ data, field, editCallback, deleteCallback, noItemFoundTitle }) => {
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
                <ItemText>{item[field]}</ItemText>
                <ItemIconWrapper>
                    <ItemIcon onPress={() => editCallback(item[field], item._id)}>
                        <MaterialIcons name='edit' size={24} color={GlobalStyle.color.white} />
                    </ItemIcon>
                    <ItemIcon onPress={() => alertDelete(item._id)}>
                        <MaterialIcons name='delete' size={24} color={GlobalStyle.color.white} />
                    </ItemIcon>
                </ItemIconWrapper>
            </Item>
        )
    }

    if (data.length > 0) {
        return (
            <Wrapper>
                <Content
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    contentContainerStyle={{ paddingTop: 20, paddingBottom: 0 }}
                />
            </Wrapper>
        )
    } else {
        return (
            <NoItem
                title={noItemFoundTitle}
                color={GlobalStyle.color.grey}
            />
        )
    }
}

export default ListItem;