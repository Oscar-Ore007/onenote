import React, { Component } from 'react';
import Notes from '../components/Notes';
import NoteForm from '../components/NoteForm';

class NotesContainer extends Component {
    render() {
        return (
            <div>
                My Notes Container 
                <NoteForm /> 
                <Notes /> 
            </div>
        )
    }
}

export default NotesContainer 