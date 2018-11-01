import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import isAuthenticated from './isAuthenticated';

import Home from '../Home/Home';
import Login from '../Auth/components/Login';
import Signup from '../Auth/components/Signup';
import Account from '../Auth/components/Account';
import AuthLayout from '../shared/AuthLayout';
import DashboardLayout from '../shared/DashboardLayout';

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }}
        />
      )
    )}
  />
);

const SkipRoute = ({ layout: Layout, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location },
        }}
        />
      ) : (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    )}
  />
);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <SkipRoute path="/login" exact layout={AuthLayout} component={Login} />
      <SkipRoute path="/signup" exact layout={AuthLayout} component={Signup} />
      <PrivateRoute exact path="/account" layout={DashboardLayout} component={Account} />
    </Switch>
  );
};

export default Routes;
