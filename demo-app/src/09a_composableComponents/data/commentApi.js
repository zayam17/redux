import commentData from './commentData';

export default class commentApi{
    static getAllComments(){
        return commentData.comments;
    }
}