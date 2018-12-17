import React, {Component} from 'react';

import NewTodoForm from '../../components/NewTodoForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDate, editItem } from '../../actions/todos';
import {PATHS} from "../../constants/routes";

import '../../styles/Todo.css'

class TodoDetailsContainer extends Component{
    render(){
        return <div className="tododetails">
            <NewTodoForm
                    current_date={this.props.current_date} 
                    changeDate={this._handleChangeDate}
                    handleAddEdit={this._handleAddEdit}/>
        </div>
    }
    _handleChangeDate = (date)=>{
        this.props.actions.changeDate(date)
    }
    _handleAddEdit=(e)=>{
        this.props.history.push(PATHS.TODOS);
        this.props.actions.editItem(this.props.newTodoValue.values.newTodoField, 
                                    this.props.current_date);
        e.preventDefault()
    }
}
const mapDispatchToProps = dispatch =>({
    actions: bindActionCreators({
        changeDate,
        editItem
    }, dispatch)
});

const mapStateToProps = (state)=>({
    current_date: state.todos.current_date,
    newTodoValue: state.form.newtodoform
});
export default connect(mapStateToProps, mapDispatchToProps) (TodoDetailsContainer);