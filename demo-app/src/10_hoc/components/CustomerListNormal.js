import React, { Component } from 'react';

class CustomerListNormal extends Component {
       constructor(props){
           super(props);
           this.state= {
               custname :'',
               customers: []
           }
       }
   handleCustomerInput = (e) =>{
       this.setState({custname: e.target.value})
   }
   addCustomer =(name) => {
       this.setState(prevState =>{
           return {customers: [...prevState.customers,name]};
       })
   }

    render() { 
        let customers =this.state.customers.map((customer,index)=>(
            <li key={index}>{customer}</li>
        ))
        return (
           <>
           <h2>{this.props.heading}</h2>
           <label>
               Enter customer name:
               <input type="text" value={this.state.custname} onChange={(e) =>this.handleCustomerInput(e)}/>
           </label>
           <button onClick={() =>this.addCustomer(this.state.custname)}>Add Customer</button>
           <ul>
               {customers}
           </ul>
           </>
         );
    }
}
 
export default CustomerListNormal;