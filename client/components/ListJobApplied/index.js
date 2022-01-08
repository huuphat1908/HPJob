import React from 'react';
import { Alert } from 'react-native';
import { Link } from 'react-router-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import { Wrapper, Content, Item, ItemTextContainer, ItemText, ItemIconWrapper, ItemIcon, NoItemFoundWrapper, NoItemFoundTitle } from './ListJobApplied.style';
import GlobalStyle from '../../GlobalStyle';

const ListJobApplied = ({ data, unapplyCallback, noItemFoundTitle }) => {
    const alertUnapply = (jobId) => {
        Alert.alert(
            'Unapply',
            'Are you sure to unapply this job?',
            [
                {
                    text: 'Cancel',
                },
                { text: 'OK', onPress: () => unapplyCallback(jobId) }
            ]
        );
    };

    const renderItem = ({ item }) => {
        return (
            <Item completed={item.isCompleted}>
                <ItemTextContainer>
                    <ItemText>{item.title}</ItemText>
                    <ItemText>{item.city}</ItemText>
                    <ItemText>{item.type}</ItemText>
                </ItemTextContainer>
                <ItemIconWrapper>
                    <ItemIcon>
                        <Link to={`/job/${item._id}`}>
                            <MaterialCommunityIcons name='eye' size={24} color={GlobalStyle.color.white} />
                        </Link>
                    </ItemIcon>
                    <ItemIcon onPress={() => alertUnapply(item._id)}>
                        <AntDesign name='close' size={24} color={GlobalStyle.color.white} />
                    </ItemIcon>
                </ItemIconWrapper>
            </Item >
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
            <NoItemFoundWrapper>
                <FontAwesome5 name='frown' size={80} color={GlobalStyle.color.grey} />
                <NoItemFoundTitle>{noItemFoundTitle ? noItemFoundTitle : 'No item found'}</NoItemFoundTitle>
            </NoItemFoundWrapper>
        )
    }
}

export default ListJobApplied;