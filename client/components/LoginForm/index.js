import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

import { Wrapper, Title, InputWrapper, Input, ForgotPassword, LoginBtn, TextBtn } from './LoginForm.style';

const LoginForm = () => {
    const offSetTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
                <Wrapper offSetTop={offSetTop}>
                    <Title>HPReminder</Title>
                    <InputWrapper>
                        <Input
                            placeholder='Email...'
                            placeholderTextColor={'#000f5c'}
                            autoCompleteType='off'
                            onChangeText={text => setEmail(text)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            placeholder='Password...'
                            placeholderTextColor={'#000f5c'}
                            autoCompleteType='off'
                            secureTextEntry={true}
                            onChangeText={text => setPassword(text)}
                        />
                    </InputWrapper>
                    <TouchableOpacity>
                        <ForgotPassword>Forgot Password?</ForgotPassword>
                    </TouchableOpacity>
                    <LoginBtn>
                        <TextBtn>Login</TextBtn>
                    </LoginBtn>
                    <TextBtn>Signup</TextBtn>
                </Wrapper>
        </TouchableWithoutFeedback>
    )
}

export default LoginForm;