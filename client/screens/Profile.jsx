import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Home = () => {
    const user = useSelector(state => state.user.current);

    return (
        <View>
            <Text>Username: {user.username}</Text>
            <Text>Role: {user.role}</Text>
        </View>
    );
};

export default Home;
