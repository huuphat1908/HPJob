import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Link, useLocation } from 'react-router-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';

import { MenuWrapper, MenuItem, MenuItemLogout, MenuIcon, MenuText } from './Menu.style';
import GlobalStyle from '../../GlobalStyle';
import { logout } from '../../redux/slices/userSlice';

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        width: '80%',
        borderWidth: 1,
        borderColor: '#000'
    }
})

const Menu = ({ visible, handleVisible }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await SecureStore.deleteItemAsync('token');
        dispatch(logout());
    }

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            coverScreen={true}
            onBackdropPress={handleVisible}
            animationIn='slideInLeft'
            animationOut='slideOutLeft'
        >
            <MenuWrapper>
                <Link to='/' onPress={handleVisible}>
                    <MenuItem pathname='/' location={location.pathname}>
                        <MenuIcon>
                            <FontAwesome5 name='home' size={20} color={GlobalStyle.color.grey} />
                        </MenuIcon>
                        <MenuText>Home</MenuText>
                    </MenuItem>
                </Link>
                <Link to='/profile' onPress={handleVisible}>
                    <MenuItem pathname='/profile' location={location.pathname}>
                        <MenuIcon>
                            <AntDesign name='user' size={20} color={GlobalStyle.color.grey} />
                        </MenuIcon>
                        <MenuText>Profile</MenuText>
                    </MenuItem>
                </Link>
                <Link to='/login' onPress={() => {
                    handleLogout();
                    handleVisible();
                }}>
                    <MenuItemLogout>
                        <MenuIcon>
                            <AntDesign name='logout' size={20} color={GlobalStyle.color.grey} />
                        </MenuIcon>
                        <MenuText>Logout</MenuText>
                    </MenuItemLogout>
                </Link>
            </MenuWrapper>
        </Modal>
    )
}

export default Menu;