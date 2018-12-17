import {CREATE_ACCOUNT} from '../actions/signup';

const initialState = {
    user:{},
    message:null
};

export default (state = initialState, action)=>{
    switch(action.type){
        case CREATE_ACCOUNT:
            return {
                ...state,
                user: action.user, 
                message: action.message
            }
        default: return state;
    }
};