import React from 'react';

import { Wrapper, Background, Avatar } from './UserHeader.style';
import backgroundNoImg from '../../images/background-no-image-candidate.jpg';
import avatarNoImg from '../../images/avatar-no-image.jpg';
import { baseURLLocal } from '../../configs/baseUrl';

const UserHeader = ({ user }) => {
    
    return (
        <Wrapper>
            {user.background ?
                <Background source={{ uri: `${baseURLLocal}/${user.background}` }} />
                :
                <Background source={backgroundNoImg} />
            }
            {user.avatar ?
                <Avatar source={{ uri: `${baseURLLocal}/${user.avatar}` }} />
                :
                <Avatar source={avatarNoImg} />
            }
        </Wrapper>
    )
};

export default UserHeader;