import React, {Component} from 'react';
import { connect } from 'react-redux';
import fetchNotebooks from './actions/fetchNotebooks';
import NotebooksContainer from './containers/NotebooksContainer';

class App extends Component {
 componentDidMount() {
   this.props.fetchNotebooks()
 }

  render () {
    return (
      <div>
        <NotebooksContainer /> 
      </div>
    )
  }
}

export default connect (null, { fetchNotebooks })(App); 
