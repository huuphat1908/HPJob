import React from 'react';

import { Wrapper, Background, Avatar } from './CandidateHeader.style';
import backgroundNoImg from '../../images/background-no-image-candidate.jpg';
import avatarNoImg from '../../images/avatar-no-image.jpg';
import { baseURLLocal } from '../../configs/baseUrl';

const CandidateHeader = ({ candidate }) => {
    
    return (
        <Wrapper>
            {candidate.info.background ?
                <Background source={{ uri: `${baseURLLocal}/${candidate.info.background}` }} />
                :
                <Background source={backgroundNoImg} />
            }
            {candidate.info.avatar ?
                <Avatar source={{ uri: `${baseURLLocal}/${candidate.info.avatar}` }} />
                :
                <Avatar source={avatarNoImg} />
            }
        </Wrapper>
    )
};

export default CandidateHeader;