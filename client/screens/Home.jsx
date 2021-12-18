import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-native';
import * as SecureStore from 'expo-secure-store';
import { persistLogin, saveUserInfo } from '../redux/slices/userSlice';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.current);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    useEffect(() => {
        checkToken = async () => {
            const token = await SecureStore.getItemAsync('token');
            if (token) {
                dispatch(persistLogin(token));
                dispatch(saveUserInfo());
            }
            if (!isLoggedIn) {
                navigate('/login');
            }
        }

        checkToken();
    }, []);

    return (
        <View>
            <Text>Username: {user.username}</Text>
            <Text>Role: {user.role}</Text>
        </View>
    );
};

export default Home;
