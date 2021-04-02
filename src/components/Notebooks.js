import React from 'react';
import Notebook from './Notebook'

const Notebooks = (props) => {
console.loge(props.notebooks)
return (
    <div>
        Notebooks
        {props.notebooks.map(notebook => 
        <div key={notebook.id}><Notebook notebook={notebook}/></div>)}
            
    </div>
    )
}

export default Notebooks