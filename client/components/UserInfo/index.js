import React, { useCallback } from 'react';
import { TouchableOpacity, Linking, Alert } from 'react-native';
import { MaterialIcons, FontAwesome, Foundation, FontAwesome5 } from '@expo/vector-icons';

import { Wrapper, Content, InfoLine, InfoIcon, InfoText, Title, Detail } from './UserInfo.style';
import GlobalStyle from '../../GlobalStyle';

const UserInfo = ({ user }) => {
    const handleUrl = useCallback(async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    });


    return (
        <>
            <Wrapper>
                <Content>
                    <InfoLine background={user.username ? true : false}>
                        <InfoText>
                            <Title>Username</Title>
                            <Detail>{user.username}</Detail>
                        </InfoText>
                    </InfoLine>
                    <InfoLine background={user.jobTitle ? true : false}>
                        <InfoText>
                            <Title>Job Title</Title>
                            <Detail>{user.jobTitle}</Detail>
                        </InfoText>
                    </InfoLine>
                    <InfoLine background={user.email ? true : false}>
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
                    <InfoLine background={user.phoneNumber ? true : false}>
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
                    <InfoLine background={user.coverLetter ? true : false}>
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
                    <InfoLine background={user.portfolio ? true : false}>
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
                </Content>
            </Wrapper>
        </>
    )
}

export default UserInfo;