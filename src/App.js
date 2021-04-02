import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import fetchNotebooks from './actions/fetchNotebooks';
import NotebooksContainer from './containers/NotebooksContainer';
// import NotebookFormContainer from './containers/NotebookFormContainer';
import Navbar from './components/Navbar';

class App extends Component {
 componentDidMount() {
   this.props.fetchNotebooks()
 }

  render () {
    return (
      <>
        <Navbar /> 
        <NotebooksContainer /> 
        {/*<NotebookFormContainer /> */}
      </>
    )
  }
}

export default App  
