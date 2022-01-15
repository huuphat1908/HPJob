import React from 'react';
import { Alert } from 'react-native';
import { Link } from 'react-router-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';

import { Wrapper, Content, Item, ItemInfoContainer, ItemInfo, ItemInfoIcon, ItemInfoText, ItemIconWrapper, ItemIcon } from './ListJobPosted.style';
import GlobalStyle from '../../GlobalStyle';
import NoItem from '../NoItem';

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
            <Item>
                <ItemInfoContainer>
                    <ItemInfo>
                        <ItemInfoIcon>
                            <MaterialCommunityIcons name='format-title' size={20} color={GlobalStyle.color.white} />
                        </ItemInfoIcon>
                        <ItemInfoText>{item.title}</ItemInfoText>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemInfoIcon>
                            <Entypo name='location-pin' size={20} color={GlobalStyle.color.white} />
                        </ItemInfoIcon>
                        <ItemInfoText>{item.city}</ItemInfoText>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemInfoIcon>
                            <FontAwesome5 name='clock' size={20} color={GlobalStyle.color.white} />
                        </ItemInfoIcon>
                        <ItemInfoText>{item.type}</ItemInfoText>
                    </ItemInfo>
                    {!item.isCompleted ?
                        <ItemInfo>
                            <ItemInfoIcon>
                                <Ionicons name='lock-open-outline' size={20} color={GlobalStyle.color.white} />
                            </ItemInfoIcon>
                            <ItemInfoText>Opening</ItemInfoText>
                        </ItemInfo>
                        :
                        <ItemInfo>
                            <ItemInfoIcon>
                                <Ionicons name='ios-lock-closed-outline' size={20} color={GlobalStyle.color.white} />
                            </ItemInfoIcon>
                            <ItemInfoText>Closed</ItemInfoText>
                        </ItemInfo>
                    }
                </ItemInfoContainer>
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
                            <MaterialCommunityIcons name='information-outline' size={24} color={GlobalStyle.color.white} />
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
            <NoItem
                title={noItemFoundTitle}
                color={GlobalStyle.color.grey}
            />
        )
    }
}

export default ListJobPosted;