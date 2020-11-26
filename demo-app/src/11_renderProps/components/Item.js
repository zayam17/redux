import React, { Component } from 'react';
class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            itemInputted: '',
            items:[]
        }
    }
    handleItemInput=(e) =>{
        this.setState({itemInputted:e.target.value})
    }
    addItem = (itemName) =>{
        this.setState(prevState=>{
            return {items:[...prevState.items,toUpper?itemName.toUpperCase():itemName]};
        })
    }
    render() { 
        return ( 
            <div>
                {this.props.render(this.state.itemInputted,this.handleItemInput,this.state.items,this.addItem)}
            </div>
         );
    }
}
 
export default Item;