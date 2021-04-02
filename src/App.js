import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import NotebooksContainer from './containers/NotebooksContainer';
// import NotebookFormContainer from './containers/NotebookFormContainer';
import Navbar from './components/Navbar';
import fetchNotebooks from './actions/fetchNotebooks';
import Notebook from './components/Notebook';
import NewNotebookButton from './components/NewNotebookButton';
import NotebookForm from './components/NotebookForm';

class App extends Component {

  state = {
    notebooks: [] 
  }
 componentDidMount() {
   this.props.fetchNotebooks()
 }

  render () {
    return (
      <>
        <Navbar /> 
        <Switch>
          <Route exact path="/notebooks">
            <NotebooksContainer notebooks={this.props.notebooks}/>
          </Route>
          <Route exact path="/notebooks/new">
            <NotebookForm /> 
          </Route>
          <Route exact path="/notebooks/:id" render={(routerProps => <Notebook notebook ={this.props.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} />) }/>
        </Switch> 
        {/*<NotebookFormContainer /> */}
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    notebooks: state.notebooks || []
  }
}

export default connect(mapStateToProps, { fetchNotebooks })(App)
