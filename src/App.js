import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import NotebooksContainer from './containers/NotebooksContainer';
import Navbar from './components/Navbar';
import fetchNotebooks from './actions/fetchNotebooks';
import Notebook from './components/Notebook';
import NotebookForm from './components/NotebookForm';
import fetchNotes from './actions/fetchNotes';
import NotesContainer from './containers/NotesContainer';
import NoteForm from './components/NoteForm';
import Note from './components/Note';
import Home from './components/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFE0'
    },
    secondary: {
      main: '#EEE8AA'
    }
  }
})

class App extends Component {

  state = {
    notebooks: [],
    notes: []
  }

  componentDidMount() {
    this.props.fetchNotebooks()
    this.props.fetchNotes()
  }

  render () {
    // debugger
    return (
      <>
        <ThemeProvider theme={theme}>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/notebooks">
              <NotebooksContainer notebooks={this.props.notebooks}/>
            </Route>
            <Route exact path="/notebooks/new">
              <NotebookForm notebooks={this.props.notebooks}/> 
            </Route>
            <Route exact path="/notebooks/:id" render={(routerProps => <Notebook notebook={this.props && this.props.notebooks.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} /> ) }/>
            <Route exact path="/notebooks/:id/edit" render={(routerProps => <NotebookForm notebook={this.props && this.props.notebooks.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} /> ) }/>
            <Route exact path="/notes">
              <NotesContainer notes={this.props.notes.notes}/>
            </Route>
            <Route exact path="/notebooks/:id/notes/new" render={(routerProps => <NoteForm notebook={this.props && this.props.notebooks.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} /> ) }/>
            <Route exact path="/notebooks/:id/notes/:noteId" render={(routerProps => <Note notebook={this.props && this.props.notebooks.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} note={this.props && this.props.notes.notes.find(note => note.id === parseInt(routerProps.match.params.noteId))} /> ) }/>
            <Route exact path="/notebooks/:id/notes/:noteId/edit" render={(routerProps => <NoteForm notebook={this.props && this.props.notebooks.notebooks.find(notebook => notebook.id === parseInt(routerProps.match.params.id))} note={this.props && this.props.notes.notes.find(note => note.id === parseInt(routerProps.match.params.noteId))} /> ) }/> 
          </Switch>
        </ThemeProvider>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
      notebooks: state.notebooks || [],
      notes: state.notes || []
  }
}

export default connect(mapStateToProps, { fetchNotebooks, fetchNotes })(App)
