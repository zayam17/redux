import React, { Component } from 'react';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "Raj"
        };
        console.log("constructor called")
    }
    UNSAFE_componentWillMount(){
        console.log("component will mount shoudnt be used")
    }
    componentDidMount(){
        console.log("component did mount")
    }
    UNSAFE_componentWillUpdate(){
        console.log("will update sgoudn't be used")
    }
    componentDidUpdate(){
        console.log("component did update")
    }
    handleTextInput(event){
        this.setState({name: event.target.value});
    }
    render() { 
        console.log("Inside Render Method");
        return ( 
            <div>
                <h1>Component LifeCycle Update Demo</h1>
                <input type="text" defaultValue={this.state.name} onInput={(e) => this.handleTextInput(e)}/>
            </div>
         );
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
}
 
export default App;