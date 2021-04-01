import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notebooks from '../components/Notebooks';
import fetchNotebooks from '../actions/fetchNotebooks';

class NotebooksContainer extends Component {

    componentDidMount() {
        this.props.fetchNotebooks()
    }
    render() {
        return(
            <div>
                {/*Notebook Container! */}
                <Notebooks notebooks={this.props.notebooks} /> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notebooks: state.notebooks || []
    }
}

export default connect(mapStateToProps, {fetchNotebooks })(NotebooksContainer)