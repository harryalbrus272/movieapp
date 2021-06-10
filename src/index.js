import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';
import reportWebVitals from './reportWebVitals';
const store = createStore(movies);

// //Dispatcher in place to dispatch the actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: []
// });

// console.log('After State', store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
