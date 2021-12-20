import React, { useCallback, useState } from 'react';
import { TouchableOpacity, Linking, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialIcons, FontAwesome, Ionicons, Foundation } from '@expo/vector-icons';

import { Wrapper, Content, InfoLine, InfoIcon, InfoText, Title, Detail } from './UserInfo.style';
import GlobalStyle from '../../GlobalStyle';
import AlertPrompt from '../AlertPrompt';

const UserInfo = () => {
    const user = useSelector(state => state.user.current);
    const [modalProps, setModalProps] = useState({
        title: '',
        acceptText: '',
        visible: false
    });

    const handleUrl = useCallback(async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    });

    const handleAlertPrompt = (title, acceptText) => {
        setModalProps({
            title,
            acceptText,
            visible: true
        })
    }

    return (
        <>
            {modalProps.visible ?
                <AlertPrompt
                    title={modalProps.title}
                    acceptText={modalProps.acceptText}
                    closeModal={() => setModalProps({
                        title: modalProps.title,
                        acceptText: modalProps.acceptText,
                        visible: false
                    }
                    )} /> : null
            }
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
                            <Title>Email</Title>
                            <Detail>{user.email}</Detail>
                        </InfoText>
                        <InfoIcon>
                            <TouchableOpacity onPress={() => handleUrl(`mailto:${user.email}`)}>
                                <MaterialIcons name='email' size={32} color={`${GlobalStyle.color.darkGrey}`} />
                            </TouchableOpacity>
                        </InfoIcon>
                    </InfoLine>
                    <InfoLine>
                        <InfoText>
                            <Title>Phone number</Title>
                            <Detail>{user.phoneNumber}</Detail>
                        </InfoText>
                        <InfoIcon>
                            <TouchableOpacity onPress={() => handleUrl(`tel:${user.phoneNumber}`)}>
                                <FontAwesome name='phone' size={32} color={`${GlobalStyle.color.darkGrey}`} />
                            </TouchableOpacity>
                        </InfoIcon>
                    </InfoLine>
                    <InfoLine>
                        <InfoText>
                            <Title>Job Title</Title>
                            <Detail>{user.jobTitle ? user.jobTitle : 'Click icon to add'}</Detail>
                        </InfoText>
                        {user.jobTitle ? null :
                            <InfoIcon>
                                <TouchableOpacity onPress={() => handleAlertPrompt('job title', 'Add job title')}>
                                    <Ionicons name='add' size={32} color={`${GlobalStyle.color.darkGrey}`} />
                                </TouchableOpacity>
                            </InfoIcon>
                        }
                    </InfoLine>
                    <InfoLine>
                        <InfoText>
                            <Title>Cover Letter</Title>
                            <Detail>{user.coverLetter ? user.coverLetter : 'Click icon to add'}</Detail>
                        </InfoText>
                        {user.coverLetter ?
                            <InfoIcon>
                                <TouchableOpacity>
                                    <Foundation name='clipboard-notes' size={32} color={`${GlobalStyle.color.darkGrey}`} />
                                </TouchableOpacity>
                            </InfoIcon> :
                            <InfoIcon>
                                <TouchableOpacity onPress={() => handleAlertPrompt('cover letter', 'Add cover letter')}>
                                    <Ionicons name='add' size={32} color={`${GlobalStyle.color.darkGrey}`} />
                                </TouchableOpacity>
                            </InfoIcon>
                        }
                    </InfoLine>
                    <InfoLine>
                        <InfoText>
                            <Title>Portfolio</Title>
                            <Detail>{user.portfolio ? user.portfolio : 'Click icon to add'}</Detail>
                        </InfoText>
                        {user.portfolio ? null :
                            <InfoIcon>
                                <TouchableOpacity onPress={() => handleAlertPrompt('portfolio', 'Add portfolio')}>
                                    <Ionicons name='add' size={32} color={`${GlobalStyle.color.darkGrey}`} />
                                </TouchableOpacity>
                            </InfoIcon>
                        }
                    </InfoLine>
                </Content>
            </Wrapper>
        </>
    )
}

export default UserInfo;