import React, { Component } from 'react';
//import CustomerListNormal from './components/CustomerListNormal';
//import EmployeeListNormal from './components/EmployeeListNormal';
import EmployeeListHOC from './components/EmployeeList';
import CustomerListHOC from './components/CustomerList';



class App extends Component {
    
    render() { 
        return ( 
            <>
            <EmployeeListHOC heading="EmployeeList(HOC)"/>
            <CustomerListHOC heading="CustomerList(HOC)"/>
            </>
         );
    }
}
 
export default App;