import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const MenuWrapper = styled.View`
    background: ${GlobalStyle.color.white};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    z-index: 100;
`;

export const MenuItem = styled.View`
    background: ${props => props.pathname == props.location ? '#eee' : '#fdfdfd'};
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 12px;
`;

export const MenuItemLogout = styled.View`
    background: ${GlobalStyle.color.white};
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
    color: ${GlobalStyle.color.grey};
`;

export const Line = styled.View`
    width: 100%;
    height: 0;
    border: 1px solid ${GlobalStyle.color.grey};
    margin-top: 10px;
    margin-bottom: 10px;
`;