import React, { Component } from 'react';
import Notes from '../components/Notes';
import NoteForm from '../components/NoteForm';

class NotesContainer extends Component {
    render() {
        return (
            <div>
                My Notes Container 
                <NoteForm notebook={this.props.note}/> 
                <Notes notes={this.props.notebook ? this.props.notebook.notes : null} /> 
            </div>
        )
    }
}

export default NotesContainer 