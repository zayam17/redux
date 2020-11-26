import React, { Component } from 'react';
import withItem from './withItem';


class EmployeeList extends Component {
    render() {
        const {itemInputted,handleItemInput,items,addItem}=this.props;
        let itemList=items.map((item,index) =>(
<li key={index}>{item}</li>
        ))
        return (
            <>
            <h2>{this.props.heading}</h2>
            <label>
                Enter employee name:
                <input type="text" value={itemInputted} onChange={(e) =>handleItemInput(e)} />
            </label>
            <button onClick={() => addItem(itemInputted)}>Add Employee (HOC)</button>
            <ul>
                {itemList}
            </ul>
            </>
          );
    }
}
 
export default withItem(EmployeeList,true);