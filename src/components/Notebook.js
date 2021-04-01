import React from 'react';

const Notebooks = (props) => {
console.loge(props.notebooks)
return (
    <div>
        Notebooks
        {props.notebooks.map(notebook => <li key={notebook.id}>
            {notebook.title}</li>)}
    </div>
    )
}

export default Notebooks