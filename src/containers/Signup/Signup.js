import React, { Component } from 'react';
import { PATHS } from '../../constants/routes'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAccount } from '../../actions/signup';
import Signup from '../../components/Signup';

class SignupContainer extends Component{
    render(){
        return <div className="signup-container">
            <Signup onSubmit={this._handleSubmit}/>
        </div>
    }

    _handleSubmit = (value)=>{
        this.props.actions.createAccount(value);
        this.props.history.push(PATHS.LOGIN);
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        createAccount
    }, dispatch)
});

export default connect(null, mapDispatchToProps) (SignupContainer);