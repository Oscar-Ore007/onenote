import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return(
        <nav>
            <Link to="/notebooks/new">NewNotebook</Link>
            Notes
            <Link to="/notebooks">Notebooks</Link>
        </nav>
    )
}

export default Navbar 