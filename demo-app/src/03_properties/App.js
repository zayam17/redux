import React, { Component } from 'react';
/*
class OSComponent extends Component {

    render() { 
        return (
            <>
            <h1>Operating System: {this.props.os}</h1>
            <h3>Developed by: {this.props.children}</h3>
            </>
          );
    }
}
 */

 const OSComponent = (props) =>{
  return(
      <div>
      <h1>Operating System: {props.os}</h1>
      <h3>Developed by: {props.children}</h3>
      </div>
  )
 }
class App extends Component {
    render() { 
        return ( 
            <>
               <OSComponent os="windows">Microsoft</OSComponent>
               <OSComponent os="Solaris">Sun Microsystewm</OSComponent>
               <OSComponent os="IOS">Apple</OSComponent>

            </>
         );
    }
}
 
export default App;