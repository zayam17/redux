import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            empname: 'Ram',
            bManage: false
        };
    }

   handleTextChange(e){
       this.setState({empname: e.target.value})
   }

   handleCheckbox(){
       this.setState((prevState)=>({
           bManager: !prevState.bManager
        } ))
   }

    render() { 
        let role = this.state.bManager? "Manager":"Employee";
        return ( 
            <>
            <h2>State Demo</h2>
            <div>
                <label>
                    Employee Name:
                    <input type="text" value={this.state.empname} onChange={(e) =>this.handleTextChange(e)} />
                    <input type="checkbox" checked={this.state.bManager} onChange={() =>this.handleCheckbox()} />
                    Manager
                </label>
            </div>
        <p>{this.state.empname} is {role}</p>
            </>
         );
    }
}
 
export default App;