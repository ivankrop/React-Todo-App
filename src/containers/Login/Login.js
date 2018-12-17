import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loginUser} from '../../actions/login';

import Login from '../../components/Login';
import {PATHS} from "../../constants/routes";


class LoginContainer extends Component{
    render(){
        return <div className="login-container">
            <Login onSubmit = {this._handleSubmit}/>
            <h6 className="error-massage">{this.props.errorLogin}</h6>
        </div>
    }

    _handleSubmit = (value)=>{
        this.props.actions.loginUser(value);
    }

    componentDidUpdate(){
        if(this.props.auth){
            this.props.history.push(PATHS.TODOS);
        }
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loginUser
    }, dispatch)
});

const mapStateToProps = (state)=>({
    auth: state.login.auth,
    errorLogin: state.login.errorLogin
});

export default connect(mapStateToProps, mapDispatchToProps) (LoginContainer);