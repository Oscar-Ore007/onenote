import React from 'react';
import { Link } from 'react-router-dom';

function newNotebookButton() {
    return (
        <div>
            <Link to="/notebooks/new">
                <button>New Notebook</button>
            </Link>
        </div>
    )
}

export default NewNotebookButton 