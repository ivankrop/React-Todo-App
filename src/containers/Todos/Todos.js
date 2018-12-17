import React, {Component} from 'react';

import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllTodos, 
    toggleComplete, 
    deleteTodo, 
    openModal, 
    closeModal, 
    getTodo, 
    changeDate, 
    editItem, 
    addItem } from '../../actions/todos';

import TodoItem from '../../components/TodoItem';
import NewTodoForm from '../../components/NewTodoForm';
import '../../styles/Todo.css';

class TodosContainer extends Component{

    render(){
        const {todos_array, open} = this.props;
        return <div className="todos-container">
            <h1 className="logoheader">TODO</h1>
            {
                !Array.isArray(todos_array)?'Loading':<ul className="list-group">
                    {
                        todos_array.map(i=>
                            <li key = {i.id} className="list-group-item todo">
                                <TodoItem
                                    title = {i.title}
                                    completed={i.completed}
                                    id={i.id} 
                                    expires_at={i.expires_at}
                                    handlerToggle={this._handlerToggle}
                                    handlerDelete={this._handlerDelete}
                                    handleOpenModal={this._handleOpenModal}
                                    handleGetTodo={this._handleGetTodo}/>
                            </li>
                        )
                    }
                </ul>
            }
            <button onClick={this._handleOpenModal} className="btn btn-primary btn-new">New</button>
            <Modal open={open} onClose={this._handleCloseModal} center>
                <h4 className="logoheader">CREATE new or EDIT current</h4>
                <NewTodoForm
                    current_date={this.props.current_date} 
                    changeDate={this._handleChangeDate}
                    handleAddEdit={this._handleAddEdit}/>
            </Modal>
        </div>
    }

    componentDidMount(){
        this.props.actions.fetchAllTodos();
    }
    _handlerToggle = (completed, id)=>{
        this.props.actions.toggleComplete(completed, id);
    }
    _handlerDelete = (id)=>{
        this.props.actions.deleteTodo(id);
    }
    _handleCloseModal = () => {
        this.props.actions.closeModal();
    }
    _handleOpenModal = () => {
        this.props.actions.openModal();
    }
    _handleGetTodo = (id) =>{
        this.props.actions.getTodo(id);
    }
    _handleChangeDate = (date)=>{
        this.props.actions.changeDate(date)
    }
    _handleAddEdit=(e)=>{
        
        if(this.props.id_check){
            this.props.actions.editItem(this.props.newTodoValue.values.newTodoField, this.props.current_date);
            this.props.actions.closeModal();
        }
        else{
            this.props.actions.addItem(this.props.newTodoValue.values.newTodoField, this.props.current_date);
            this.props.actions.closeModal();
        }
        e.preventDefault()
    }
}

const mapDispatchToProps = dispatch =>({
    actions: bindActionCreators({
        fetchAllTodos,
        toggleComplete,
        deleteTodo,
        openModal,
        closeModal,
        getTodo,
        changeDate,
        editItem,
        addItem
    }, dispatch)
});

const mapStateToProps = (state)=>({
    todos_array:state.todos.todos_array,
    open: state.todos.open,
    current_date: state.todos.current_date,
    id_check:state.todos.id_check,
    newTodoValue: state.form.newtodoform
});

export default connect(mapStateToProps, mapDispatchToProps) (TodosContainer);