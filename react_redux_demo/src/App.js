import './App.css';
import React, { Component } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions';

function App() {
  const counter=useSelector(state=>state.counter)
  const isLogged=useSelector(state=>state.isLogged)
  const dispatch=useDispatch();

  return (
   <div className="App">
     <h1>Counter : {counter}</h1>
     <button onClick={()=>dispatch(increment(5))}>+</button>
     <button onClick={()=>dispatch(decrement(5))}>-</button>
     {isLogged? <h1>You are logged in</h1>:<h3>you dont have access</h3>}
   </div>
  );
}

export default App;
