import React, { Component } from 'react';
import {connect} from "react-redux";


class Container extends Component {
   
    render() { 
        return ( 
            <div>
                {!this.props.error?(
                    <ul>
                    {!this.props.loading?
                    this.props.data.map(item =>{
                        return(
                            <li key={item.id}>
                                {},{item.title}
                            </li>
                        );
                    })
                :"loading..."}
                </ul>
                ):(
                    <ul>{this.props.error}</ul>
                )}
            </div>
         );
    }
}
const mapStateToProps =state =>{
    return{
        data:state.reducer.data,
        error:state.reducer.error,
        loading:state.reducer.loading
    };
};
 
export default connect(mapStateToProps)(Container);