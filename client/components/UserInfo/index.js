import React, { useCallback, useState } from 'react';
import { TouchableOpacity, Linking, Alert, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialIcons, FontAwesome, Foundation, FontAwesome5, AntDesign } from '@expo/vector-icons';

import { Wrapper, Content, InfoLine, InfoIcon, InfoText, Title, Detail, EditUserWrapper, EditUserText } from './UserInfo.style';
import GlobalStyle from '../../GlobalStyle';
import UserForm from '../UserForm';

const UserInfo = () => {
    const user = useSelector(state => state.user.current);
    const [visibleModal, setVisibleModal] = useState(false);

    const handleUrl = useCallback(async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    });

    const handleModal = () => {
        setVisibleModal(!visibleModal);
    }

    return (
        <>
            <Modal visible={visibleModal} animationType='slide'>
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10, zIndex: 100 }}>
                    <AntDesign name='close' size={32} color={GlobalStyle.color.white} onPress={handleModal} />
                </TouchableOpacity>
                <UserForm />
            </Modal>
            <Wrapper>
                <Content>
                    <InfoLine>
                        <InfoText>
                            <Title>Username</Title>
                            <Detail>{user.username}</Detail>
                        </InfoText>
                    </InfoLine>
                    <InfoLine>
                        <InfoText>
                            <Title>Job Title</Title>
                            <Detail>{user.jobTitle}</Detail>
                        </InfoText>
                    </InfoLine>
                    <InfoLine>
                        <InfoText>
                            <Title>Email</Title>
                            <Detail>{user.email}</Detail>
                        </InfoText>
                        <InfoIcon>
                            <TouchableOpacity onPress={() => handleUrl(`mailto:${user.email}`)}>
                                <MaterialIcons name='email' size={32} color={`${GlobalStyle.color.white}`} />
                            </TouchableOpacity>
                        </InfoIcon>
                    </InfoLine>
                    <InfoLine>
                        <InfoText>
                            <Title>Phone number</Title>
                            <Detail>{user.phoneNumber}</Detail>
                        </InfoText>
                        {user.phoneNumber ?
                            <InfoIcon>
                                <TouchableOpacity onPress={() => handleUrl(`tel:${user.phoneNumber}`)}>
                                    <FontAwesome name='phone' size={32} color={`${GlobalStyle.color.white}`} />
                                </TouchableOpacity>
                            </InfoIcon> : null
                        }
                    </InfoLine>
                    <InfoLine>
                        <InfoText>
                            <Title>Cover Letter</Title>
                            <Detail>{user.coverLetter}</Detail>
                        </InfoText>
                        {user.coverLetter ?
                            <InfoIcon>
                                <TouchableOpacity onPress={() => handleUrl(`https://${user.coverLetter}`)}>
                                    <Foundation name='clipboard-notes' size={32} color={`${GlobalStyle.color.white}`} />
                                </TouchableOpacity>
                            </InfoIcon> : null
                        }
                    </InfoLine>
                    <InfoLine>
                        <InfoText>
                            <Title>Portfolio</Title>
                            <Detail>{user.portfolio}</Detail>
                        </InfoText>
                        {user.portfolio ?
                            <InfoIcon>
                                <TouchableOpacity onPress={() => handleUrl(`https://${user.portfolio}`)}>
                                    <FontAwesome5 name='file' size={32} color={`${GlobalStyle.color.white}`} />
                                </TouchableOpacity>
                            </InfoIcon> : null
                        }
                    </InfoLine>
                    <EditUserWrapper onPress={handleModal}>
                        <EditUserText>Edit profile</EditUserText>
                    </EditUserWrapper>
                </Content>
            </Wrapper>
        </>
    )
}

export default UserInfo;