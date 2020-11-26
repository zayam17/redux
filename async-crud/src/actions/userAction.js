import * as types from './actionTypes';
import UserApi from '../data/userApi';



export function loadUsersSuccess(users){
    return{
        type:types.LOAD_USERS_SUCCESS, users
    };
}
export function addUserSuccess(users){
    return{
        type:types.ADD_USER_SUCCESS, users
    };
}
export function loadUsers(){
    return function(dispatch){
        return UserApi.getAllUsers().then(users =>{
            dispatch(loadUsersSuccess(users))
        }).catch(error => {
            throw(error);
        });
    };
}

export function addUser(user){
    return function(dispatch,getState){
        return UserApi.saveUser(user)
        .then(user=>{
            dispatch(addUserSuccess(user));
        }).catch(error =>{
            throw(error);
        });
    };
}

/*
export function deleteUser(user){
    return function(dispatch,getState){
        return UserApi.deleteUser(id)
        .then(user=>{
            dispatch(deleteUserSuccess(id));
        }).catch(error =>{
            throw(error);
        });
    };
}
*/