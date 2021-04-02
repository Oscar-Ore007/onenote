
import React from 'react';
import { Link } from 'react-router-dom';



function Notebooks(props) {
    // debugger
    return (
        <div>
            <ul>
                Notebooks
                {props.notebooks.notebooks && props.notebooks.notebooks.map(notebook => 
                    <li key={notebook.id}>
                        {/* <Notebook notebook={notebook}/> */}
                        <Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link>
                    </li> )}
            </ul>
        </div>
    )
}

export default Notebooks