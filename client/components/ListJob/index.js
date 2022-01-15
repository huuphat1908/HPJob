import React from 'react';
import { Link } from 'react-router-native';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

import { Wrapper, Content, Item, ItemInfoContainer, ItemInfo, ItemInfoIcon, ItemInfoText, ItemIconWrapper, ItemIcon } from './ListJob.style';
import GlobalStyle from '../../GlobalStyle';
import NoItem from '../NoItem';
import Loading from '../Loading';

const ListJob = ({ data, loading, noItemFoundTitle }) => {
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
                </ItemInfoContainer>
                <ItemIconWrapper>
                    <ItemIcon>
                        <Link to={`/job/${item._id}`}>
                            <MaterialCommunityIcons name='eye' size={24} color={GlobalStyle.color.white} />
                        </Link>
                    </ItemIcon>
                </ItemIconWrapper>
            </Item >
        )
    }

    if (loading) {
        return (
            <Loading />
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

export default ListJob;