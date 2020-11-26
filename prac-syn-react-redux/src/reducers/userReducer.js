import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


function userReducer(state=[],action){
    switch(action.type){
        case actionTypes.ADD_USER:
            return[
                ...state,
           { id:action.id,
            name:action.name,
            }
            ];
            case actionTypes.DELETE_USER:
                let newState=state.filter(function(id){
                    return userReducer.id !=action.id;
                });
                return newState;
            default:
                return state;
    }
}

export default userReducer;