import React, { Component } from 'react';
import CommentList from './CommentList';
import commentApi from '../data/commentApi';


class AllCommentsPage extends Component {
   constructor(props){
       super(props);
       this.state={
           comments:[]
       };
   }
   componentDidMount(){
       this.setState({comments: commentApi.getAllComments()});
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