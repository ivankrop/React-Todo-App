import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PATHS} from "../../constants/routes";
import { Field, reduxForm } from 'redux-form';

import '../../styles/Signup.css';

const validate = values =>{
    const errors = {}
    if(!values.username){
        errors.username='Required'
    }
    else if(values.username.length >15 || values.username.length <5){
        errors.username='Required'
    }
    if(!values.password){
        errors.password='Required'
    }
    if(!values.email){
        errors.email='Required'
    }
    if (values.password !== values.confirmpassword){
        errors.password = 'Password mismatched'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
    return errors
}

const renderField = ({ input, type, label ,meta: { touched, error } }) => (
    <div>
        <input {...input} 
            type={type} 
            autoComplete="off" 
            className={(touched && error) ? 'error':''}
            placeholder={label}/>
    </div>
)

class Signup extends Component{

    render(){
        const {handleSubmit} = this.props;
        return <form onSubmit={handleSubmit}>
            <h2><b>Create a TODO Account</b></h2>
            <h5>or <Link to={PATHS.LOGIN}>
                    sign in to your account
                </Link>
            </h5>
            <div className="inputs">
                <div className="inputfield">
                    <label htmlFor="firstname"><h6>First Name</h6></label>
                    <Field 
                        name="firstName" 
                        component={renderField} 
                        type="text"
                        label=" Firstname"/>
                </div>
                <div className="inputfield">
                    <label htmlFor="lastname"><h6>Last Name</h6></label>
                    <Field 
                        name="lastName" 
                        component={renderField} 
                        type="text"
                        label=" Lastname"/>
                </div>
                <div className="inputfield">
                    <label htmlFor="username"><h6>User Name</h6></label>
                    <Field 
                        name="username" 
                        component={renderField} 
                        type="text"
                        label=" Username"/>
                </div>
                <div className="inputfield">
                    <label htmlFor="email"><h6>Email</h6></label>
                    <Field 
                        name="email" 
                        component={renderField} 
                        type="text"
                        label=" Email"/>
                </div>
                <div className="inputfield">
                    <label htmlFor="password"><h6>Password</h6></label>
                    <Field 
                        name="password" 
                        component={renderField} 
                        type="password"
                        label=" Password"/>
                </div>
                <div className="inputfield">
                    <label htmlFor="password"><h6>Password Confirmation</h6></label>
                    <Field 
                        name="confirmpassword" 
                        component={renderField} 
                        type="password"
                        label=" Password Confirmation"/>
                </div>
                <button type ="submit" 
                        className="btn btn-success">
                        Create New Account
                </button>
            </div>
        </form>
    }
}

export default reduxForm({
    form:'signup',
    validate
})(Signup);