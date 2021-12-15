import React, { useState, useEffect } from 'react';
import { StatusBar, Platform, TouchableOpacity } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';

import { Wrapper, Title, SubMenu, SubMenuItem, MenuWrapper, MenuItem, MenuIcon, MenuText } from './Header.style';

const Header = () => {
    const [menuShown, setMenuShown] = useState(false);
    const [title, setTitle] = useState('Home');
    const location = useLocation();
    const offSetTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

    const handleMenu = () => {
        setMenuShown(!menuShown);
    };

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setTitle('Home');
                break;
            case '/note':
                setTitle('Note');
                break;
            case '/note':
                setTitle('Note');
                break;
            case '/archive':
                setTitle('Archive');
                break;
            case '/trash':
                setTitle('Trash');
                break;
        }
    }, [location]);

    return (
        <>
            <Wrapper offSetTop={offSetTop}>
                <FontAwesome5 name='bars' size={20} color='#e5e5e5' onPress={handleMenu} />
                <Title>{title}</Title>
                <SubMenu>
                    <SubMenuItem>
                        <MaterialIcons name='note-add' size={20} color='#e5e5e5' />
                    </SubMenuItem>
                    <SubMenuItem>
                        <Entypo name='dots-three-vertical' size={20} color='#e5e5e5' />
                    </SubMenuItem>
                </SubMenu>
            </Wrapper>
            {menuShown ?
                <MenuWrapper offSetTop={offSetTop}>
                    <Link to='/' onPress={handleMenu} component={TouchableOpacity}>
                            <MenuItem>
                                <MenuIcon>
                                    <FontAwesome5 name='home' size={20} color='#1c1c1c' />
                                </MenuIcon>
                                <MenuText>Home</MenuText>
                            </MenuItem>
                    </Link>
                    <Link to='/note' onPress={handleMenu}>
                        <MenuItem>
                            <MenuIcon>
                                <MaterialCommunityIcons name='notebook' size={20} color="#1c1c1c" />
                            </MenuIcon>
                            <MenuText>Note</MenuText>
                        </MenuItem>
                    </Link>
                    <Link to='/archive' onPress={handleMenu}>
                        <MenuItem>
                            <MenuIcon>
                                <FontAwesome5 name='archive' size={20} color="#1c1c1c" />
                            </MenuIcon>
                            <MenuText>Archive</MenuText>
                        </MenuItem>
                    </Link>
                    <Link to='/trash' onPress={handleMenu}>
                        <MenuItem>
                            <MenuIcon>
                                <FontAwesome5 name='trash' size={20} color="#1c1c1c" />
                            </MenuIcon>
                            <MenuText>Trash</MenuText>
                        </MenuItem>
                    </Link>
                </MenuWrapper> : null
            }
        </>
    )
}

export default Header;