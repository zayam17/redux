import React, { Component } from 'react';
import PropTypes from 'prop-types';


class UserComponent extends Component {
    render() { 
        return (
            <>
            <h2>Proptypes Demo</h2>
            <p>Name :{this.props.name}</p>
        <p>Projects :{this.props.projects}</p>
        <p>Age : {this.props.age}</p>
            </>
          );
    }
}


UserComponent.PropTypes = {
    name :PropTypes.string.isRequired,
    projects : PropTypes.array,
    age(props,propName){
    if(typeof props[propName] !=="number"){
        return new Error("Age must be a number");
    }
    if(props[propName]>100){
        return new Error("Age entered is"+props[propName]+",it should be less than or equal to 100");
    }
}
 
};

/*UserComponent.defaultProps={
    name:"VINAY"
}
*/
class App extends Component {
    render() { 
        return (
            <UserComponent name={"zayam"} projects={["ShoppingCart"]} age={200}></UserComponent>
          );
    }
}
 
export default App;