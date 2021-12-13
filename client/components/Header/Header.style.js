import styled from 'styled-components/native';

import GlobalStyle from '../../GlobalStyle';

export const Wrapper = styled.View`
    height: 70px;
    background: ${GlobalStyle.color.darkGrey}; 
    margin-top: ${props => props.offSetTop}px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: ${GlobalStyle.dimen.paddingLeft};
`;

export const Title = styled.Text`
    color: ${GlobalStyle.color.lightGrey};
    padding-left: 24px;
    font-size: ${GlobalStyle.dimen.fontBig};
`;

export const MenuWrapper = styled.View`
    padding-top: ${props => props.offSetTop}px;
    background: ${GlobalStyle.color.lightGrey};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 80%;
`;

export const MenuItem = styled.View`
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