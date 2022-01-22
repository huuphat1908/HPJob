import React, { useState } from 'react';
import { Modal, ScrollView } from 'react-native';

import { Wrapper, Content, Item, Avatar, InfoWrapper, PrimaryText } from './ListUser.style';
import { baseURLLocal } from '../../configs/baseUrl';
import avatarNoImg from '../../images/avatar-no-image.jpg';
import GlobalStyle from '../../GlobalStyle';
import NoItem from '../NoItem';
import CloseButton from '../CloseButton';
import UserHeader from '../UserHeader';
import UserInfo from '../UserInfo';

const ListUser = ({ data }) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const handleModal = () => {
        setVisibleModal(!visibleModal);
    };

    const renderUser = ({ item }) => {
        return (
            <Item onPress={() => {
                handleModal();
                setCurrentUser(item)
            }}>
                {item.avatar ?
                    <Avatar source={{ uri: `${baseURLLocal}/${item.avatar}` }} />
                    :
                    <Avatar source={avatarNoImg} />
                }
                <InfoWrapper>
                    <PrimaryText>{item.email}</PrimaryText>
                </InfoWrapper>
            </Item>
        )
    }

    return (
        <>
            <Modal visible={visibleModal} animationType="slide">
                <CloseButton size="32" callback={handleModal} />
                <ScrollView>
                    <UserHeader
                        user={currentUser}
                    />
                    <UserInfo
                        user={currentUser}
                    />
                </ScrollView>
            </Modal>
            <Wrapper>
                {data.length > 0 ?
                    <Content
                        data={data}
                        renderItem={renderUser}
                        keyExtractor={user => user._id}
                    />
                    :
                    <NoItem
                        title='No user'
                        color={GlobalStyle.color.white}
                    />
                }
            </Wrapper>
        </>
    )
}

export default ListUser;