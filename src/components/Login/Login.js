import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PATHS} from "../../constants/routes";
import { Field, reduxForm } from 'redux-form';

import '../../styles/Login.css'

const validate = values =>{
    const errors = {}
    if(!values.username){
        errors.username='Required'
    }
    if(!values.password){
        errors.password='Required'
    }
    return errors
}

const renderField = ({ input, type, label ,meta: { touched, error } }) => (
    <div>
        <input {...input} 
            type={type} 
            autoComplete="off" 
            className={(touched && error) ? 'error':''}
            placeholder={label}
            />
    </div>
)

class Login extends Component{

    render(){
        const {handleSubmit} = this.props;
        return <form onSubmit={handleSubmit} className="logincontainer">
            <h1><b>Log in to TODO</b></h1>
            <h5>or <Link to={PATHS.SIGNUP}>
                    create an account
                </Link>
            </h5>
            <div className="inputf">
                <label htmlFor="userName"><h6>UserName</h6></label><br/>
                <Field 
                    name="username" 
                    component={renderField}
                    type="text"
                    label=" username"/>
            </div>
            <div className="inputf">
                <label htmlFor="password"><h6>Password</h6></label><br/>
                <Field 
                    name="password" 
                    component={renderField}
                    type="password"
                    label=" password"/>
            </div>
            <button type ="submit" 
                    className="btn btn-success">
                    Log In
            </button>
        </form>
    }
}

export default reduxForm({
    form:'login',
    validate
})(Login);