import * as Font from 'expo-font';
import { setCustomText } from 'react-native-global-props';

export const getFonts = () => {
    return Font.loadAsync({
        'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
    })
}

const customTextProps = {
    style: {
        fontSize: 16,
        color: '#212121',
        fontFamily: 'roboto-regular'
    }
}

export const setCustomFont = () => {
    setCustomText(customTextProps);
}
