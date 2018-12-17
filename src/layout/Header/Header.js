import React, { Component } from 'react';

import { FaSignInAlt, FaUser, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {logoutUser} from '../../actions/login';

import {PATHS} from "../../constants/routes";
import '../../styles/Header.css'

class Header extends Component {
  render () {
    const {auth, actions} = this.props;
    let buttons;
    if(auth){
      buttons = <div className="regbutton" onClick={actions.logoutUser}>
                      <Link to={PATHS.INDEX}>LogOut <span><FaArrowLeft/></span></Link>
                </div>
    }else{
      buttons = <div className="regbuttons">
                  <Link to={PATHS.LOGIN}>LogIn <span><FaSignInAlt/></span></Link>
                  <Link to={PATHS.SIGNUP}>SignUp <span><FaUser/></span></Link>
                </div>
    }
    return <header className="header">
      <nav className="navbar bg-dark">
        <div><b><Link to={PATHS.TODOS}>TODO</Link></b></div>
        {buttons}
      </nav>
    </header>
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      logoutUser
  }, dispatch)
});

const mapStateToProps = (state)=>({
  auth: state.login.auth
});

export default connect(mapStateToProps, mapDispatchToProps) (Header);