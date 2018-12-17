import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import '../../styles/NewTodoForm.css'

class NewTodoForm extends Component{
    render(){
        const {current_date, changeDate, handleAddEdit} = this.props
        return <form className="new-todo-form">
                <Field  type="text"
                    component="input"
                    name="newTodoField"
                    className="form-control"/>
                <div className="datepiker-button">
                    <DatePicker
                        selected = {current_date}
                        onChange = {changeDate}
                        showTimeSelect
                        dateFormat="YYYY-MM-d HH:mm:ss"
                        className="datepiker form-control"
                        timeFormat="HH:mm"
                        minDate={new Date()}
                        timeIntervals={15}/>
                    <button className="btn btn-primary add-button" onClick={handleAddEdit}>Save</button>
                </div>
            </form>
    }
}

export default reduxForm({
    form:'newtodoform'
})(NewTodoForm);