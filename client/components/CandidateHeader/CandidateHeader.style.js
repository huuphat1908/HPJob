import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex: 1;
`;

export const Background = styled.ImageBackground`
    background: #00BFFF;
    height: 200px;
`;

export const Avatar = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    border-width: 4px;
    border-color: #fff;
    margin-bottom: 10px;
    align-self: center;
    position: absolute;
    margin-top: 130px;
    z-index: 100;
`;