import React from 'react';

import { Wrapper, Background, Avatar } from './ProfileHeader.style';
import avatarImg from '../../images/admin-avatar.jpg';
import backgroundImg from '../../images/admin-background.jpg';

const ProfileHeader = () => {
    return (
        <Wrapper>
            <Background source={backgroundImg} />
            <Avatar source={avatarImg}/>
        </Wrapper>
    )
};

export default ProfileHeader;