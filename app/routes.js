import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter} from "react-router-dom";

import Home from './Home/Home';
import Login from './Auth/components/Login';
import Signup from './Auth/components/Signup';
import Account from './Auth/components/Account';
import AuthLayout from './shared/AuthLayout';
import DashboardLayout from './shared/DashboardLayout';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  isAuthenticated(){
      if(this.props.token){
        return true;
      }else{
        return false;
      }
  }
  
  render() {
    const PrivateRoute = ({ layout:Layout, component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.isAuthenticated() ? (
          <Layout>
            <Component {...props}/>
          </Layout>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )

    const SkipRoute = ({ layout:Layout, component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.isAuthenticated() ? (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
          
        ) : (
          <Layout>
            <Component {...props}/>
          </Layout>
        )
      )}/>
    )

    // const AppRoute = ()

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <SkipRoute path="/login" exact layout={AuthLayout} component={Login} />
        <SkipRoute path="/signup" exact layout={AuthLayout} component={Signup} />
        <PrivateRoute exact path="/account" layout={DashboardLayout} component={Account}/>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default withRouter(connect(mapStateToProps)(Routes));

