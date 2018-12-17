import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import signup from './signup';
import todos from './todos';

export default combineReducers({
    form: formReducer,
    login,
    signup,
    todos
})
