import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Wrapper, Background, Avatar } from './ProfileHeader.style';
import backgroundNoImg from '../../images/background-no-image.jpg';
import avatarNoImg from '../../images/avatar-no-image.jpg';
import { baseURLLocal } from '../../configs/baseUrl';

const ProfileHeader = () => {
    const user = useSelector(state => state.user.current);
    const [background, setBackground] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const handleAvatar = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [16, 9],
                quality: 1,
            });
            console.log(result);
            if (!result.cancelled) {
                setAvatar(result.uri);
            }
        } catch (error) {
            Alert.alert('Something went wrong');
            console.log(error);
        }
    }

    const handleBackground = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            console.log(result);
            if (!result.cancelled) {
                setBackground(result.uri);
            }
        } catch (error) {
            Alert.alert('Something went wrong');
            console.log(error);
        }
    }

    return (
        <Wrapper>
            <TouchableOpacity onPress={handleBackground}>
                {background ?
                    <Background source={{ uri: background }} />
                    :
                    user.background ?
                        <Background source={{ uri: `${baseURLLocal}/${user.background}` }} />
                        :
                        <Background source={backgroundNoImg} />
                }
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={handleAvatar}>
                {avatar ?
                    <Avatar source={{ uri: avatar }} />
                    :
                    user.avatar ?
                        <Avatar source={{ uri: `${baseURLLocal}/${user.avatar}` }} />
                        :
                        <Avatar source={avatarNoImg} />
                }
            </TouchableWithoutFeedback>
        </Wrapper>
    )
};

export default ProfileHeader;