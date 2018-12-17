import { FETCH_ALL_TODOS,
    DELETE_TODO,
    OPEN_WINDOW,
    CLOSE_WINDOW,
    FETCH_TODO,
    CHANGE_DATE,
    EDIT_ITEM,
    ADD_TODO } from '../actions/todos';

const initialState = {
    todos_array:[],
    open:false,
    current_date:new Date(),
    id_check:null,
    current_todo:{}
};

export default (state = initialState, action)=>{
    switch(action.type){
        case FETCH_ALL_TODOS:{
            return{
                ...state,
                todos_array: action.todos_array
            }
        }
        case DELETE_TODO:{
            return{
                ...state,
                todos_array:[...action.new_array]
            }
        }
        case OPEN_WINDOW:{
            return{
                ...state,
                open:true
            }
        }
        case CLOSE_WINDOW:{
            return{
                ...state,
                open:false,
                current_date: new Date(),
                id_check:null
            }
        }
        case FETCH_TODO:{
            return{
                ...state,
                current_date: new Date(action.current_date),
                id_check: action.id_check,
                current_todo: action.current_todo
            }
        }
        case CHANGE_DATE:{
            return{
                ...state,
                current_date: action.new_date
            }
        }
        case EDIT_ITEM:{
            return{
                ...state,
                id_check:null
            }
        }
        case ADD_TODO:{
            return {
                ...state,
                todos_array:[...action.new_todos, action.new_title]
            }
        }

        default: return state;
    }
}