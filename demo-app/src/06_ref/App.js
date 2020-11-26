import React, { Component } from 'react';

class App extends Component {
   constructor(props){
       super(props);
       this.refName=React.createRef();
       this.refLocation=React.createRef();
   }
handleSubmit(){
    let name=this.refName.current.value;
    let location=this.refLocation.current.value;
    alert(`NAME = ${name},LOCATION = ${location}`);
    this.refName.current.focus();
}


    render() { 
        return ( 
            <>
            <h1>Ref Demo</h1>
            <label>Enter Your Name : 
                <input type="text" ref={this.refName}/>
            </label>
            <label>Enter Your Location : 
                <input type="text" ref={this.refLocation}/>
            </label>
            <button onClick={() => this.handleSubmit()}>Submit</button>
            </>
         );
    }
}
 
export default App ;