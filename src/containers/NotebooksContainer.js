import React, { Component } from 'react';
import Notebooks from '../components/Notebooks';

class NotebooksContainer extends Component {
    render() {
        return(
            <div>
                Notebook Container! 
                <Notebooks /> 
            </div>
        )
    }
}

export default NotebooksContainer