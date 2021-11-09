import React from "react";
import { Text } from "react-native";
import { Wrapper } from "./Note.styles";

const Note = ({ title, content }) => {
    return (
        <Wrapper>
            <Text>title</Text>
            <Text>content</Text>
        </Wrapper>
    );
};

export default Note;
