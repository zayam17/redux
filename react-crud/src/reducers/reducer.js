import {GET_DATA_SUCCESS,GET_DATA_ERROR,GET_DATA_REQUEST} from '../actions/action';

const initialState={
    data:[],
    loading:false,
    errors:''
};

export default function reducer(state=initialState, action={}) {
    switch(action.type){
        case GET_DATA_REQUEST:
            return{
                ...state,
                data:[],
                loading:true,
                error:''
            }
            case GET_DATA_SUCCESS:
                return{
                    ...state,
                    data:action.payload,
                    loading:false,
                    error:''
                }
    
    case GET_DATA_ERROR:
        return{
            ...state,
            data:[],
            loading:false,
            error:"error occured"
        }
        default:
            return initialState;
        }
}