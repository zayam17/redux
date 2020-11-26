import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {

    render() { 
        console.log("CommentList render => comments ="+this.props.comments);
        let commentNodes= this.props.comments.map(comment => (
            <Comment key ={comment.id} author={comment.author}> {comment.text}
            </Comment>  
        ));
        return ( 
          <>
          <table>'
              <thead>
                  <tr>
                      <th>Author</th>
                      <th>Comment</th>
                  </tr>
              </thead>
              <tbody>
                  {commentNodes}
              </tbody>
          </table>
          </>
         );
    }
}
 
export default CommentList;