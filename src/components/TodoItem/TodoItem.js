import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { FaCheck, FaPen, FaTrash } from 'react-icons/fa'
import '../../styles/Todo.css'
class TodoItem extends Component{

    render(){
        const {title, completed, id, expires_at, handlerToggle, handlerDelete, handleOpenModal, handleGetTodo} = this.props;
        return <div className="todoitem">

            <div className="todo-buttons">
                <button className={completed?"btn btn-success":"btn btn-light"} onClick={()=>handlerToggle(completed, id)}>{<FaCheck/>}</button>
                <h6><Link className="todoLink" to={`/todos/${id}`} id={id} 
                            onClick={()=>{handleGetTodo(id)}}>{title}</Link></h6>
                <div className={`indicator ${this._indicator(expires_at)}`}>●</div>
            </div>
            
            <div className="todo-buttons">
                <button className="btn btn-light removebutton" onClick={()=>handlerDelete(id)}><FaTrash/></button>
                <button className="btn btn-light" onClick={()=>{handleOpenModal(); handleGetTodo(id)}}><FaPen/></button>
            </div>
            
        </div>
    }

    _indicator = (expires_at) => {

        let currentTime = new Date().getTime();
        let one_hour = 60 * 60 * 1000;

        if (new Date(expires_at).getTime() < currentTime + 1 * one_hour) {

            return 'red'

        } else if (new Date(expires_at).getTime() > currentTime + 1 * one_hour &&
            new Date(expires_at).getTime() < currentTime + 3 * one_hour) {

            return 'yellow'

        } else {

            return 'green'
            
        }
    }
}

export default TodoItem;
