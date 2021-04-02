import React, { Component } from 'react';
import NotebookFormContainer from '../containers/NotebookFormContainer';

class NotebookForm extends Component {

    state = {title: ""}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        preventDefault(event)
    }

    render() {
        return(
            <div>
                Input notebook here! 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange} /> 
                    <input type="submit"/> 
                </form>
            </div>
        )
    }
}

export default NotebookForm