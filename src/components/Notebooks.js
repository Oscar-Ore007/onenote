import React from 'react';
import {Link} from 'react-router-dom';

function Notebooks(props) {
console.loge(props.notebooks)
return (
<div>
    <ul>
        Notebooks
        {props.notebooks.map(notebook => 
        <li key={notebook.id}>

        <Link to={`/notebooks/${notebook.id}`}>{notebook.title}
        </Link>
        
        </li> )}
            
    </ul>

   
    </div>
    )
}

export default Notebooks