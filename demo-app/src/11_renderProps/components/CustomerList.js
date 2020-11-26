import React, { Component } from 'react';

class CustomerList extends Component {
    render() { 
        return ( 
            <>
            <h2>{this.props.heading}</h2>
            <label>
                Enter customer name:
                  <input type="text" value={itemInputted} onChange={(e)=>handleItemInput(e)}/>
            </label>
            <button onClick={()=>addItem(itemInputted)}>Add Customer (RP)</button>
            <ul>
                {itemList}
            </ul>
            </>
         )
    }
}
 
export default CustomerList;