import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css'

import store from './store';

import MainLayout from "./layout/Main";
import HomeContainer from "./containers/Home";
import LoginContainer from "./containers/Login";
import SignupContainer from "./containers/Signup";
import TodosContainer from "./containers/Todos";
import TodoDetailsContainer from "./containers/TodoDetails";
import PrivateRoute from "./containers/PrivateRoute";
import HomeRoute from './containers/Home/HomeRoute';
import {PATHS} from "./constants/routes";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <MainLayout>
                <Switch>
                  <HomeRoute exact path={PATHS.INDEX} component={HomeContainer}/>
                  <Route exact path={PATHS.LOGIN} component={LoginContainer}/>
                  <Route exact path={PATHS.SIGNUP} component={SignupContainer}/>
                  <PrivateRoute exact path={PATHS.TODOS} component={TodosContainer}/>
                  <PrivateRoute exact path={PATHS.TODO_DETAILS} component={TodoDetailsContainer}/>
                  <PrivateRoute exact component={TodosContainer}/>
                </Switch>
              </MainLayout>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
