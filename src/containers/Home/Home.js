import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import {PATHS} from "../../constants/routes";

import '../../styles/Home.css'

class HomeContainer extends Component{
    render(){
        return <div className="home-container">
            <h1 className="header-title">
                <b>TODO</b> lets you work more productive<br/> and efficiently
            </h1>
            <div>
                <Link to={PATHS.SIGNUP}>
                    <button className="btn btn-lg btn-light">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    }
}
export default HomeContainer;