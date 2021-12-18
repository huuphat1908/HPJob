import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    height: 70px;
    background: ${GlobalStyle.color.darkGrey}; 
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24px;
`;

export const Title = styled.Text`
    color: ${GlobalStyle.color.lightGrey};
    padding-left: 24px;
    font-size: ${GlobalStyle.dimen.fontMed};
    font-weight: 700;
`;

export const MenuWrapper = styled.View`
    background: #fff;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    z-index: 100;
`;

export const MenuItem = styled.View`
    background: ${props => props.pathname == props.location ? '#eee' : '#fff'};
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 12px;
`;

export const MenuItemLogout = styled.View`
    background: #fff;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 12px;
`;

export const MenuIcon = styled.View`
    padding-left: 24px;
    padding-right: 24px;
    justify-content: center;
    align-items: center;
`;

export const MenuText = styled.Text`
    font-weight: 700;
    color: ${GlobalStyle.color.darkGrey};
`;