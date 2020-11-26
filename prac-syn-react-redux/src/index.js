import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import  UserComponent from './components/UserComponent';


const store=configureStore();


ReactDOM.render(
    <Provider store={store}>
        <UserComponent />
    </Provider>,document.getElementById('root')
)