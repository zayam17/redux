import React, { Component } from 'react';

class Comment extends Component {
   
    render() { 
        return (  
            <tr>
                <td>{this.props.author}</td>
                <td>{this.props.children}</td>
            </tr>
        );
    }
}
 
export default Comment;