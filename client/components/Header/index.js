import React, { useState } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Link } from 'react-router-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { Wrapper, Title, MenuWrapper, MenuItem, MenuIcon, MenuText } from './Header.style';

const Header = () => {
    const [menuShown, setMenuShown] = useState(false);
    const offSetTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

    const handleMenu = () => {
        setMenuShown(!menuShown);
    };

    return (
        <>
            <Wrapper offSetTop={offSetTop}>
                <FontAwesome5 name='bars' size={24} color='#e5e5e5' onPress={handleMenu} />
                <Title>Home</Title>
            </Wrapper>
            {menuShown ?
                <MenuWrapper offSetTop={offSetTop}>
                    <Link to='/' onPress={handleMenu}>
                        <MenuItem>
                            <MenuIcon>
                                <FontAwesome5 name='home' size={24} color='#1c1c1c' />
                            </MenuIcon>
                            <MenuText>Home</MenuText>
                        </MenuItem>
                    </Link>
                    <Link to='/note' onPress={handleMenu}>
                        <MenuItem>
                            <MenuIcon>
                                <MaterialCommunityIcons name='notebook' size={24} color="#1c1c1c" />
                            </MenuIcon>
                            <MenuText>Note</MenuText>
                        </MenuItem>
                    </Link>
                    <Link to='/archive' onPress={handleMenu}>
                        <MenuItem>
                            <MenuIcon>
                                <FontAwesome5 name='archive' size={24} color="#1c1c1c" />
                            </MenuIcon>
                            <MenuText>Archive</MenuText>
                        </MenuItem>
                    </Link>
                    <Link to='/trash' onPress={handleMenu}>
                        <MenuItem>
                            <MenuIcon>
                                <FontAwesome5 name='trash' size={24} color="#1c1c1c" />
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