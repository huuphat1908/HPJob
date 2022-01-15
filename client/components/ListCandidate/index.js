import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import ModalLib from 'react-native-modal';
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, ToastAndroid } from 'react-native';

import { Wrapper, Content, Item, Avatar, InfoWrapper, PrimaryText, SecondaryText, IconWrapper, ItemFunction, FunctionText } from './ListCandidate.style';
import { baseURLLocal } from '../../configs/baseUrl';
import avatarNoImg from '../../images/avatar-no-image.jpg';
import GlobalStyle from '../../GlobalStyle';
import NoItem from '../NoItem';
import userApi from '../../api/userApi';

const styles = StyleSheet.create({
    modal: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 'auto',
        marginBottom: 0,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: GlobalStyle.color.lightGrey,
        width: '100%',
        maxHeight: 100,
    }
});

const ListCandidate = ({ data, job, setUpdateJob }) => {
    let navigate = useNavigate();
    const [visibleModal, setVisibleModal] = useState(false);
    const [currentCandidate, setCurrentCandidate] = useState({});

    const handleNavigate = (candidate) => {
        navigate(`/candidate/${candidate.info._id}`, {
            state: {
                candidate,
                job
            }
        });
    };

    const handleModal = (candidate) => {
        setVisibleModal(!visibleModal);
        setCurrentCandidate(candidate);
    };

    const handleInterview = async () => {
        try {
            const data = await userApi.interview(currentCandidate.info._id, job._id);
            setVisibleModal(!visibleModal);
            ToastAndroid.show(data.success, ToastAndroid.BOTTOM);
            setUpdateJob();
        } catch (error) {
            console.log(error);
            alert(error.response.data.error);
        }
    };

    const handleRecruit = async () => {
        try {
            const data = await userApi.recruit(currentCandidate.info._id, job._id);
            setVisibleModal(!visibleModal);
            ToastAndroid.show(data.success, ToastAndroid.BOTTOM);
            setUpdateJob();
        } catch (error) {
            console.log(error);
            alert(error.response.data.error);
        }
    };

    const renderUser = ({ item }) => {
        return (
            <Item onPress={() => handleNavigate(item)}>
                {item.info.avatar ?
                    <Avatar source={{ uri: `${baseURLLocal}/${item.info.avatar}` }} />
                    :
                    <Avatar source={avatarNoImg} />
                }
                <InfoWrapper>
                    <PrimaryText>{item.info.email}</PrimaryText>
                    {item.interviewed ? <SecondaryText>Interviewed</SecondaryText> : null}
                    {item.accepted ? <SecondaryText>Recruited</SecondaryText> : null}
                </InfoWrapper>
                <IconWrapper onPress={() => handleModal(item)} >
                    <MaterialCommunityIcons name='dots-horizontal' size={28} color={GlobalStyle.color.white} />
                </IconWrapper>
            </Item>
        )
    }

    return (
        <Wrapper>
            {data.length > 0 ?
                <Content
                    data={data}
                    renderItem={renderUser}
                    keyExtractor={user => user._id}
                />
                :
                <NoItem
                    title='No candidate'
                    color={GlobalStyle.color.white}
                />
            }
            <ModalLib
                style={styles.modal}
                isVisible={visibleModal}
                onBackdropPress={handleModal}
            >
                <ItemFunction onPress={handleInterview}>
                    <IconWrapper>
                        <AntDesign name='team' size={20} color={GlobalStyle.color.grey} />
                    </IconWrapper>
                    <FunctionText>{currentCandidate.interviewed ? 'Mark as not interviewed': 'Mark as interviewed'}</FunctionText>
                </ItemFunction>
                <ItemFunction onPress={handleRecruit}>
                    <IconWrapper>
                        <SimpleLineIcons name='user-following' size={20} color={GlobalStyle.color.grey} />
                    </IconWrapper>
                    <FunctionText>{currentCandidate.accepted ? 'Mark as not recruited' : 'Mark as recruited'}</FunctionText>
                </ItemFunction>
            </ModalLib>
        </Wrapper>
    )
}

export default ListCandidate;