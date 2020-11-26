import axios from 'axios';

export default class UsersApi{
    static getAllUsers(cb){
        axios.get('http://localhost:3002/users')
        .then(response => cb(response.data))
        .catch(error =>{throw error});
    }
}