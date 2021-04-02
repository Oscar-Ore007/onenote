import React, { Component } from 'react';
import NotebookFormContainer from '../containers/NotebookFormContainer';

class NotebookForm extends Component {

    state = {title: ""}
    
    render() {
        return(
            <div>
                Input notebook here! 
                <form>
                    <input type="text" placeholder="Title" /> 
                </form>
            </div>
        )
    }
}

export default NotebookForm