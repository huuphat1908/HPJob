import React from 'react';
import { ScrollView } from 'react-native';

import ProfileHeader from '../components/ProfileHeader';
import UserInfo from '../components/UserInfo';

const Profile = () => {
    return (
        <ScrollView>
            <ProfileHeader />
            <UserInfo />
        </ScrollView>
    );
};

export default Profile;
