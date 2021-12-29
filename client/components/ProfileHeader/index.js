import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Wrapper, Background, Avatar } from './ProfileHeader.style';
import backgroundNoImg from '../../images/background-no-image.jpg';
import avatarNoImg from '../../images/avatar-no-image.jpg';
import { baseURLLocal } from '../../configs/baseUrl';
import userApi from '../../api/userApi';
import { getUserInfo } from '../../redux/slices/userSlice';

const ProfileHeader = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.current);
    const [background, setBackground] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const handleBackground = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
            });
            if (!result.cancelled) {
                setBackground(result.uri);
                await userApi.setBackground(result.uri);
                dispatch(getUserInfo());
            }
        } catch (error) {
            Alert.alert('Something went wrong');
            console.log(error);
        }
    }

    const handleAvatar = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
            });
            if (!result.cancelled) {
                setAvatar(result.uri);
                await userApi.setAvatar(result.uri);
                dispatch(getUserInfo());
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