import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Notes from '../components/Notes';
import NoteForm from '../components/NoteForm';
import Note from '../components/Note';

class NotesContainer extends Component {
    render() {
        return (
            <div>
                My Notes Container 
                <NoteForm notebook={this.props.notebook}/> 
                <Notes notes={this.props.notebook ? this.props.notebook.notes : null} /> 

                <Route exact path="/notebooks/:id/notes/:id" render = {(routerProps) => <Note {...routerProps}/>}/>
            </div>
        )
    }
}

export default NotesContainer 