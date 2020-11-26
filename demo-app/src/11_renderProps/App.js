import React, { Component } from 'react';
import Item from './components/Item';
import EmployeeList from './components/EmployeeList';
import CustomerList from './components/CustomerList';


class App extends Component {
    render() { 
        return ( 
            <>
            <Item isUpper={true} render=
            {(itemInputted,handleItemInput,items,addItem)=>(
                <EmployeeList
                itemInputted={itemInputted}
                handleItemInput={handleItemInput}
                items={items}
                addItem={addItem}
                heading="EmployeeList (RenderProps)"/>
            )}>
         </Item>
         <Item  render=
            {(itemInputted,handleItemInput,items,addItem)=>(
                <CustomerList
                itemInputted={itemInputted}
                handleItemInput={handleItemInput}
                items={items}
                addItem={addItem}
                heading="EmployeeList (RenderProps)"/>
            )}>
         </Item>
            </>
         );
    }
}
 
export default App;