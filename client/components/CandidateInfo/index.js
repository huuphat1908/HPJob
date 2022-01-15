import React, { useCallback } from 'react';
import { TouchableOpacity, Linking, Alert } from 'react-native';
import { MaterialIcons, FontAwesome, Foundation, FontAwesome5 } from '@expo/vector-icons';

import { Wrapper, Content, InfoLine, InfoIcon, InfoText, Title, Detail } from './CandidateInfo.style';
import GlobalStyle from '../../GlobalStyle';

const CandidateInfo = ({ candidate }) => {
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
                    <InfoLine background={candidate.info.username ? true : false}>
                        <InfoText>
                            <Title>Username</Title>
                            <Detail>{candidate.info.username}</Detail>
                        </InfoText>
                    </InfoLine>
                    <InfoLine background={candidate.info.jobTitle ? true : false}>
                        <InfoText>
                            <Title>Job Title</Title>
                            <Detail>{candidate.info.jobTitle}</Detail>
                        </InfoText>
                    </InfoLine>
                    <InfoLine background={candidate.info.email ? true : false}>
                        <InfoText>
                            <Title>Email</Title>
                            <Detail>{candidate.info.email}</Detail>
                        </InfoText>
                        <InfoIcon>
                            <TouchableOpacity onPress={() => handleUrl(`mailto:${candidate.info.email}`)}>
                                <MaterialIcons name='email' size={32} color={`${GlobalStyle.color.white}`} />
                            </TouchableOpacity>
                        </InfoIcon>
                    </InfoLine>
                    <InfoLine background={candidate.info.phoneNumber ? true : false}>
                        <InfoText>
                            <Title>Phone number</Title>
                            <Detail>{candidate.info.phoneNumber}</Detail>
                        </InfoText>
                        {candidate.info.phoneNumber ?
                            <InfoIcon>
                                <TouchableOpacity onPress={() => handleUrl(`tel:${candidate.info.phoneNumber}`)}>
                                    <FontAwesome name='phone' size={32} color={`${GlobalStyle.color.white}`} />
                                </TouchableOpacity>
                            </InfoIcon> : null
                        }
                    </InfoLine>
                    <InfoLine background={candidate.info.coverLetter ? true : false}>
                        <InfoText>
                            <Title>Cover Letter</Title>
                            <Detail>{candidate.info.coverLetter}</Detail>
                        </InfoText>
                        {candidate.info.coverLetter ?
                            <InfoIcon>
                                <TouchableOpacity onPress={() => handleUrl(`https://${candidate.info.coverLetter}`)}>
                                    <Foundation name='clipboard-notes' size={32} color={`${GlobalStyle.color.white}`} />
                                </TouchableOpacity>
                            </InfoIcon> : null
                        }
                    </InfoLine>
                    <InfoLine background={candidate.info.portfolio ? true : false}>
                        <InfoText>
                            <Title>Portfolio</Title>
                            <Detail>{candidate.info.portfolio}</Detail>
                        </InfoText>
                        {candidate.info.portfolio ?
                            <InfoIcon>
                                <TouchableOpacity onPress={() => handleUrl(`https://${candidate.info.portfolio}`)}>
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

export default CandidateInfo;