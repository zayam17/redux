import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import './index.css';
//import App from './01_welcome/App';
//import App from './02_componentReuse/App';
//import App from './03_properties/App';
//import App from './04_events/App';
//import App from './05_state/App';
//import App from './06_ref/App';
//import App from './07_propTypes/App';
//import App from './07_propTypes/08a_componentLifeCycle/App';
//import App from './09a_composableComponents/App';
import App from './CRUD/App';
//import App from './10_hoc/App';
//import App from './11_renderProps/App';
//import App from './12_formHandling/App';
//import App from './13_reactrouter/App';
//import App from './prac_reduxreact/App';
//import App from './prac_react-reduxDataFlow/components/App';

//const store = createStore(counterApp);


ReactDOM.render(
 
    <App/>
,
  document.getElementById('root')
);

// If you wancst to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
