import React from 'react';

function Note(props) {

    let note = props.note 
    return (
        <div>
            {note && note.date }
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            Note!!
        </div>
    )
}

export default Note 