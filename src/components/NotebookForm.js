import React, { Component } from 'react';
import NotebookFormContainer from '../containers/NotebookFormContainer';

class NotebookForm extends Component {

    state = {title: ""}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    render() {
        return(
            <div>
                Input notebook here! 
                <form>
                    <input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange} /> 
                </form>
            </div>
        )
    }
}

export default NotebookForm