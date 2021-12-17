import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native';

const Home = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const user = useSelector(state => state.user.current);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, []);

    return (
        <View>
            <Text>Username: {user.username}</Text>
            <Text>Role: {user.role}</Text>
        </View>
    );
};

export default Home;
