import React from 'react';
import { useSelector } from 'react-redux';

import { Wrapper, Background, Avatar } from './ProfileHeader.style';
import backgroundNoImg from '../../images/background-no-image.jpg';
import avatarNoImg from '../../images/avatar-no-image.jpg';
import { TouchableOpacity } from 'react-native';

const ProfileHeader = () => {
    const user = useSelector(state => state.user.current);

    return (
        <Wrapper>
            {user.background ?
                <Background source={{ uri: user.background }} />
                :
                <TouchableOpacity>
                    <Background source={backgroundNoImg} />
                </TouchableOpacity>
            }
            {user.avatar ?
                <Avatar source={{ uri: user.avatar }} />
                :
                <Avatar source={avatarNoImg} />
            }
        </Wrapper>
    )
};

export default ProfileHeader;