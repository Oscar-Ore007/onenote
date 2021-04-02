import React, { Component } from 'react';
import Notes from '../components/Notes';

class NotesContainer extends Component {
    render() {
        return (
            <div>
                My Notes Container 
                <Notes /> 
            </div>
        )
    }
}

export default NotesContainer 