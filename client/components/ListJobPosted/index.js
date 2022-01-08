import React from 'react';
import { Alert } from 'react-native';
import { Link } from 'react-router-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import { Wrapper, Content, Item, ItemTextContainer, ItemText, ItemIconWrapper, ItemIcon, NoItemFoundWrapper, NoItemFoundTitle } from './ListJobPosted.style';
import GlobalStyle from '../../GlobalStyle';

const ListJobPosted = ({ data, completeCallback, undoCompleteCallback, noItemFoundTitle }) => {
    const alertComplete = (jobId) => {
        Alert.alert(
            'Complete job',
            'Are you sure to close this job?',
            [
                {
                    text: 'Cancel',
                },
                { text: 'OK', onPress: () => completeCallback(jobId) }
            ]
        );
    };

    const alertUndoComplete = (jobId) => {
        Alert.alert(
            'Open job',
            'Are you sure to open this job again?',
            [
                {
                    text: 'Cancel',
                },
                { text: 'OK', onPress: () => undoCompleteCallback(jobId) }
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
                    {!item.isCompleted ?
                        <ItemIcon onPress={() => alertComplete(item._id)}>
                            <AntDesign name='check' size={24} color={GlobalStyle.color.white} />
                        </ItemIcon>
                        :
                        <ItemIcon onPress={() => alertUndoComplete(item._id)}>
                            <AntDesign name='close' size={24} color={GlobalStyle.color.white} />
                        </ItemIcon>
                    }
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

export default ListJobPosted;