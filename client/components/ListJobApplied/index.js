import React from 'react';
import { Alert } from 'react-native';
import { Link } from 'react-router-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import { Wrapper, Content, Item, ItemInfoContainer, ItemInfo, ItemInfoIcon, ItemInfoText, ItemIconWrapper, ItemIcon } from './ListJobApplied.style';
import GlobalStyle from '../../GlobalStyle';
import NoItem from '../NoItem';

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
            <Item>
                <ItemInfoContainer>
                    <ItemInfo>
                        <ItemInfoIcon>
                            <MaterialCommunityIcons name='format-title' size={20} color={GlobalStyle.color.white} />
                        </ItemInfoIcon>
                        <ItemInfoText>{item.info.title}</ItemInfoText>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemInfoIcon>
                            <Entypo name='location-pin' size={20} color={GlobalStyle.color.white} />
                        </ItemInfoIcon>
                        <ItemInfoText>{item.info.city}</ItemInfoText>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemInfoIcon>
                            <FontAwesome5 name='clock' size={20} color={GlobalStyle.color.white} />
                        </ItemInfoIcon>
                        <ItemInfoText>{item.info.type}</ItemInfoText>
                    </ItemInfo>
                    {!item.info.isCompleted ?
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
                    <ItemInfo>
                        <ItemInfoIcon>
                            <AntDesign name='team' size={20} color={GlobalStyle.color.white} />
                        </ItemInfoIcon>
                        <ItemInfoText>{item.interviewed ? 'Interviewed' : 'Not interviewed'}</ItemInfoText>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemInfoIcon>
                        <SimpleLineIcons name='user-following' size={20} color={GlobalStyle.color.white} />
                        </ItemInfoIcon>
                        <ItemInfoText>{item.accepted ? 'Accepted' : 'Still not accepted'}</ItemInfoText>
                    </ItemInfo>
                </ItemInfoContainer>
                <ItemIconWrapper>
                    <ItemIcon>
                        <Link to={`/job/${item.info._id}`}>
                            <MaterialCommunityIcons name='eye' size={24} color={GlobalStyle.color.white} />
                        </Link>
                    </ItemIcon>
                    <ItemIcon onPress={() => alertUnapply(item.info._id)}>
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
                    keyExtractor={item => item.info._id}
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

export default ListJobApplied;