import React from 'react';
import { Link, Route } from 'react-router-dom';
import Note from './Note';

function Notes(props) {

    return (
        <div>
            <br/> 
            All notes will go here:
            <ul>
            {props.notes && props.notes.map(note =>
                <li key={note.id}>
                    {note.title} - {note.content}
                    <Link to={`/notebooks/${note.notebook_id}/notes/${note.id}`}>{note.title}</Link>
                </li>
                )}
                </ul>
        </div>
    )
}

export default Notes 