import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import{ composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initialState = {}
let store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

// let reducer = ''

// let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
