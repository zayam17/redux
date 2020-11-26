import * as types from '../actions/actionTypes';


export default function userReducer(state=initialState.users,action){
    switch(action.types){
        case types.LOAD_USERS_SUCCESS:
            return action.users;
        case types.ADD_USER_SUCCESS:
            return[
                ...state,
           { id:action.id,
            name:action.name,
            location:action.location}
            ];
        case types.DELETE_USER_SUCCESS:
            let newState=state.filter(function(user){
                return user.id!=action.id;
            });
            return newState;
        default:
            return state;
    }
}