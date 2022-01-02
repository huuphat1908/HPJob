import { Platform, StatusBar, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const offSetTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
const windowHeight = Dimensions.get('window').height;
const safeAreaHeight = parseInt(windowHeight) - parseInt(offSetTop);

const GlobalStyle = {
    color: {
        white: '#fdfdfd',
        green: '#2fbd74',
        yellow: '#f9c25c',
        blue: '#003f5c',
        pink: '#fb5b5a',
        grey: '#6d6d6d',
        lightGrey: '#eee',
        medGrey: '#353535',
        darkGrey: '#1c1c1c',
    },
    dimen: {
        paddingLeft: '8px',
        fontSuperBig: '40px',
        fontBig: '24px',
        fontMed: '20px',
        fontSmall: '16px'
    },
    offSetTop,
    safeAreaHeight,
};

export const PrimaryButton = styled.TouchableOpacity`
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    background-color: ${GlobalStyle.color.pink};
    border-radius: 25px;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const PrimaryTextButton = styled.Text`
    color: ${GlobalStyle.color.white};
    font-size: 16px;
`;

export default GlobalStyle;