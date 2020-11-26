import axios from 'axios';

export default class UserApi{
    static getAllUsers(cb){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>cb(response.data))
        .catch(error =>{throw error});
    }
}