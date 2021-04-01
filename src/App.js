import React, {Component} from 'react';
import { connect } from 'react-redux';
import fetchNotebooks from './actions/fetchNotebooks';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/notebooks')
    .then(response => response.json())
    .then(data => console.log(data[0].notes))
  }

  render () {
    return (
      <div>
        Hello World 
      </div>
    )
  }
}

export default connect (null, { fetchNotebooks })(App); 
