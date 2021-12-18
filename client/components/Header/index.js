import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

import { Wrapper, Title, MenuWrapper, MenuItem, MenuItemLogout, MenuIcon, MenuText } from './Header.style';
import { logout } from '../../redux/slices/userSlice';

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const [menuShown, setMenuShown] = useState(false);
    const [title, setTitle] = useState('Home');
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    const handleMenu = () => {
        setMenuShown(!menuShown);
    };

    const handleLogout = async () => {
        await SecureStore.deleteItemAsync('token');
        dispatch(logout());
    }

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setTitle('Home');
                break;
            case '/profile':
                setTitle('Profile');
                break;
        }
    }, [location]);

    return (
        <>
            {isLoggedIn ?
                <Wrapper>
                    <FontAwesome5 name='bars' size={20} color='#e5e5e5' onPress={handleMenu} />
                    <Title>{title}</Title>
                </Wrapper> : null
            }
            {menuShown && isLoggedIn ?
                <MenuWrapper>
                    <Link to='/' onPress={handleMenu}>
                        <MenuItem pathname='/' location={location.pathname}>
                            <MenuIcon>
                                <FontAwesome5 name='home' size={20} color='#1c1c1c' />
                            </MenuIcon>
                            <MenuText>Home</MenuText>
                        </MenuItem>
                    </Link>
                    <Link to='/profile' onPress={handleMenu}>
                        <MenuItem pathname='/profile' location={location.pathname}>
                            <MenuIcon>
                                <AntDesign name='user' size={20} color='#1c1c1c' />
                            </MenuIcon>
                            <MenuText>Profile</MenuText>
                        </MenuItem>
                    </Link>
                    <MenuItemLogout onPress={handleLogout}>
                        <MenuIcon>
                            <AntDesign name='logout' size={20} color='#1c1c1c' />
                        </MenuIcon>
                        <MenuText>Logout</MenuText>
                    </MenuItemLogout>
                </MenuWrapper> : null
            }
        </>
    )
}

export default Header;