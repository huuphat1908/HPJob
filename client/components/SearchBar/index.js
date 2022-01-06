import React from 'react';
import { EvilIcons } from '@expo/vector-icons';

import { Wrapper, IconWrapper, InputWrapper, Input } from './SearchBar.style';
import GlobalStyle from '../../GlobalStyle';

const SearchBar = ({ placeholder, text, setText }) => {
    return (
        <Wrapper>
            <IconWrapper>
                <EvilIcons name='search' size={24} color={GlobalStyle.color.darkGrey} />
            </IconWrapper>
            <InputWrapper>
                <Input
                    placeholder={placeholder}
                    placeholderTextColor={GlobalStyle.color.darkGrey}
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </InputWrapper>
        </Wrapper>
    )
}

export default SearchBar;