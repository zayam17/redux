import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentApi from '../data/CommentApi';


class AllCommentsPage extends Component {
   constructor(props){
       super(props);
       this.state={
           comments:[]
       };
   }
   componentDidMount(){
CommentApi.getAllComments(data => this.setState({comments:data}))  ;
 }
    render() { 
        return (
            <>
            <h1>Comments</h1>
            <CommentList comments={this.state.comments} />
            </>
          );
    }
}
 
export default AllCommentsPage;