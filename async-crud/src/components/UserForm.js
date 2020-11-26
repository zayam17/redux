import React, { Component } from 'react';

class UserForm extends Component {
 constructor(props){
     super(props);
     this.onAddClick=this.onAddClick.bind(this);
 }

onAddClick(){
    let user={};
    user.id=this.refs.id.value;
    user.name=this.refs.name.value;
    this.props.onAddUser(user);

}

    render() { 
        return ( 
            <div>
                <span>Enter Name: </span>
                <input type="text" ref="id" /><br/><br/>
                <span>Enter Location : </span>
                <input type="text" ref="name" /><br/><br/>
                <button onClick={this.onAddClick}>Add User</button>

            </div>
         );
    }
}
 
export default UserForm;