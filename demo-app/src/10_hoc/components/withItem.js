import React, { Component } from 'react';

const withItem=(WrappedComponent,toUpper) => {
    class WithItem extends Component{
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
        render(){
            return(
                <WrappedComponent
                    itemInputted={this.state.itemInputted}
                    handleItemInput={this.handleItemInput}
                    items={this.state.items}
                    addItem={this.addItem}
                    {...this.props}/>
            )
        }
    }
    return withItem;
}
export default WithItem

