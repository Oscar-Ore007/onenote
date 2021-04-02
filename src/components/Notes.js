import React from 'react';
import { Link} from 'react-router-dom';
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
                </li>
                )}
                </ul>
        </div>
    )
}

export default Notes 