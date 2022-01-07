import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


// with reducers

// import reducer from './store/reducers/auth';
// import {createStore, compose, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';


//  handle middleware. thunk will be used for such
// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, composeEnhances(
//   applyMiddleware(thunk)
// ));

// const app = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )
// ReactDOM.render(app, document.getElementById('root'));

