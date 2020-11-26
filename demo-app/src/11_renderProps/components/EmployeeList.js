import React, { Component } from 'react';

class EmployeeList extends Component {
    render() { 
        return ( 
            <>
            <h2>{this.props.heading}</h2>
            <label>
                Enter employee name:
                  <input type="text" value={itemInputted} onChange={(e)=>handleItemInput(e)}/>
            </label>
            <button onClick={()=>addItem(itemInputted)}>Add Employee (RP)</button>
            <ul>
                {itemList}
            </ul>
            </>
         )
    }
}
 
export default EmployeeList;