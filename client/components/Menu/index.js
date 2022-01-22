import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Link, useLocation } from 'react-router-native';
import { FontAwesome5, FontAwesome, AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from 'react-redux';

import { MenuWrapper, MenuItem, MenuItemLogout, MenuIcon, MenuText, Line } from './Menu.style';
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

    const currentUser = useSelector(state => state.user.current);

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
            animationInTiming={400}
            animationOutTiming={400}
            backdropTransitionInTiming={400}
            backdropTransitionOutTiming={400}
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
                <Link to='/job' onPress={handleVisible}>
                    <MenuItem pathname='/job' location={location.pathname}>
                        <MenuIcon>
                            <FontAwesome name='suitcase' size={20} color={GlobalStyle.color.grey} />
                        </MenuIcon>
                        <MenuText>Job</MenuText>
                    </MenuItem>
                </Link>
                <Link to='/profile' onPress={handleVisible}>
                    <MenuItem pathname='/profile' location={location.pathname}>
                        <MenuIcon>
                            <FontAwesome5 name='user-alt' size={20} color={GlobalStyle.color.grey} />
                        </MenuIcon>
                        <MenuText>Profile</MenuText>
                    </MenuItem>
                </Link>
                <Link to='/change-password' onPress={handleVisible}>
                    <MenuItem pathname='/change-password' location={location.pathname}>
                        <MenuIcon>
                            <MaterialCommunityIcons name='lock-reset' size={20} color={GlobalStyle.color.grey} />
                        </MenuIcon>
                        <MenuText>Change password</MenuText>
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
                {currentUser.role == 'admin' ?
                    <>
                        <Line />
                        <Link to='/admin/job-title' onPress={handleVisible}>
                            <MenuItem pathname='/admin/job-title' location={location.pathname}>
                                <MenuIcon>
                                    <MaterialIcons name='title' size={20} color={GlobalStyle.color.grey} />
                                </MenuIcon>
                                <MenuText>Job Title</MenuText>
                            </MenuItem>
                        </Link>
                        <Link to='/admin/city' onPress={handleVisible}>
                            <MenuItem pathname='/admin/city' location={location.pathname}>
                                <MenuIcon>
                                    <MaterialIcons name='location-city' size={20} color={GlobalStyle.color.grey} />
                                </MenuIcon>
                                <MenuText>City</MenuText>
                            </MenuItem>
                        </Link>
                        <Link to='/admin/user' onPress={handleVisible}>
                            <MenuItem pathname='/admin/user' location={location.pathname}>
                                <MenuIcon>
                                    <MaterialIcons name='location-city' size={20} color={GlobalStyle.color.grey} />
                                </MenuIcon>
                                <MenuText>User</MenuText>
                            </MenuItem>
                        </Link>
                    </> : null
                }
            </MenuWrapper>
        </Modal>
    )
}

export default Menu;