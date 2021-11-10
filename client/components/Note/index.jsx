import React, { useEffect } from 'react';
import { Text } from "react-native";
import { Wrapper } from "./Note.styles";

import axios from 'axios';

const Note = ({ title, content }) => {

    useEffect(() => {
        const getNotes = async () => {
            const notes = await axios.get('http://hp-note.herokuapp.com/api/notes');
            console.log(notes.data);
            return notes;
        }
        getNotes();
    }, []);

    return (
        <Wrapper>
            <Text>title</Text>
            <Text>content</Text>
        </Wrapper>
    );
};

export default Note;
