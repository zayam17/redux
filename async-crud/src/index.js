import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import UsersComponent from './components/UsersComponent';
import './index.css';
import {loadUsers} from './actions/userAction';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const store=configureStore();
store.dispatch(loadUsers());

ReactDOM.render(
  <Provider store={store}>
    <UsersComponent/>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
