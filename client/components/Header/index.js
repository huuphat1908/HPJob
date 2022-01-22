import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { Wrapper, Title } from './Header.style';
import GlobalStyle from '../../GlobalStyle';
import Menu from '../Menu';

const Header = () => {
    const location = useLocation();

    const [menuShown, setMenuShown] = useState(false);
    const [title, setTitle] = useState('Home');
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    const handleMenu = () => {
        setMenuShown(!menuShown);
    };

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setTitle('Home');
                break;
            case '/job':
                setTitle('Job');
                break;
            case '/profile':
                setTitle('Profile');
                break;
            case '/change-password':
                setTitle('Change password');
                break;
            case '/admin/job-title':
                setTitle('Job Title');
                break;
            case '/admin/city':
                setTitle('City');
                break;
            case '/admin/user':
                setTitle('User');
                break;
            default:
                const path = location.pathname.split('/');
                switch(path[1]) {
                    case 'candidate':
                        setTitle('Candidate Profile');
                        break;
                    case 'job':
                        setTitle('Job Detail');
                        break;
                    default:
                        setTitle('Arsenal');
                        break;
                }
                break;
        }
    }, [location]);

    return (
        <>
            {isLoggedIn ?
                <Wrapper>
                    <FontAwesome5 name='bars' size={20} color={GlobalStyle.color.white} onPress={handleMenu} />
                    <Title>{title}</Title>
                </Wrapper> : null
            }
            <Menu
                visible={menuShown && isLoggedIn}
                handleVisible={() => setMenuShown(!menuShown)}
            />
        </>
    )
}

export default Header;