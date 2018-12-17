import TodosService from '../services/TodosServise';
import { change, reset } from 'redux-form';

export const FETCH_ALL_TODOS = 'FETCH_ALL_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const OPEN_WINDOW = 'OPEN_WINDOW';
export const CLOSE_WINDOW = 'CLOSE_WINDOW';
export const FETCH_TODO = 'FETCH_TODO';
export const CHANGE_DATE ='CHANGE_DATE';
export const EDIT_ITEM ='EDIT_ITEM';
export const ADD_TODO ='ADD_TODO';

export const fetchAllTodos = () => (dispatch, getState) =>{
    const {login:{token}} = getState();
    return TodosService.getAll(token)
        .then(res=>{
            dispatch({
                type: FETCH_ALL_TODOS,
                todos_array: res.data.data
            })
        })
        .catch(err=>console.log(err))
};

export const toggleComplete = (completed, id) => (dispatch, getState)=>{
    const {login:{token}} = getState();
    let toggle = completed?false:true;
    return TodosService.editTodo(token, toggle, id)
        .then(()=>{
            dispatch(fetchAllTodos(token))
        })
        .catch(err=>console.log(err))
};

export const deleteTodo = (id) => (dispatch, getState) => {
    const {login:{token},
            todos:{todos_array}} = getState();
    return TodosService.deleteTodo(token, id)
        .then(dispatch({
            type: DELETE_TODO,
            new_array: todos_array.filter((elem)=>{
                return elem.id !== id
            })
        }))
        .catch(err=>console.log(err))
}

export const openModal = () => ({
    type: OPEN_WINDOW
})

export const closeModal = () => (dispatch) => {
    dispatch(reset("newtodoform"));
    dispatch({
        type: CLOSE_WINDOW
    })
}

export const getTodo = (id) => (dispatch, getState) => {
    const {login:{token}} = getState();
    return TodosService.getTodo(token, id)
        .then(todo=>{
            dispatch({
                type:FETCH_TODO,
                current_date: todo.data.data.expires_at,
                id_check: todo.data.data.id,
                current_todo:todo.data.data
            })
            dispatch(change('newtodoform', 'newTodoField', todo.data.data.title))
        })
        .catch(err=>console.log(err))
};

export const changeDate = (date) =>({
    type: CHANGE_DATE,
    new_date: date
})

export const editItem = (title, expires_at) => (dispatch, getState) =>{
    const {login:{token}, todos:{current_todo}} = getState();
    return TodosService.editTodo(token, current_todo.completed, current_todo.id, title, expires_at)
        .then(()=>{
            dispatch(fetchAllTodos(token));
            dispatch({
                type: EDIT_ITEM
            })
        })
        .catch(err=>console.log(err))
}

export const addItem = (title, expires_at) => (dispatch, getState) =>{
    const {login:{token}, todos:{todos_array}} = getState();
    return TodosService.addTodo(token, title, expires_at)
        .then(res=>{
            dispatch({
                type: ADD_TODO,
                new_title: res.data.data,
                new_todos: todos_array
            })
        })
        .catch(err=>console.log(err));
}