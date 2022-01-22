import React from 'react';
import { ScrollView } from 'react-native';

import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';

const Profile = () => {
    return (
        <ScrollView>
            <ProfileHeader />
            <ProfileInfo />
        </ScrollView>
    );
};

export default Profile;
