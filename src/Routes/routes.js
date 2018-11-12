import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import isAuthenticated from './isAuthenticated';


import Login from '../Auth/components/Login';
import Signup from '../Auth/components/Signup';
import AuthLayout from '../Layout/AuthLayout';
import DashboardLayout from '../Layout/DashboardLayout';
import Dashboard from '../Dashboard/Dashboard';
import User from '../User/components/User';
import Role from '../Role/components/Role';
import Product from '../Product/components/Product';
import Material from '../Material/components/Material';
import Generator from '../Generator/components/Generator';

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
      <PrivateRoute exact path="/" layout={DashboardLayout} component={Dashboard} />
      <SkipRoute path="/login" exact layout={AuthLayout} component={Login} />
      <SkipRoute path="/signup" exact layout={AuthLayout} component={Signup} />
      <PrivateRoute exact path="/dashboard" layout={DashboardLayout} component={Dashboard} />
      <PrivateRoute exact path="/user" layout={DashboardLayout} component={User} />
      <PrivateRoute exact path="/role" layout={DashboardLayout} component={Role} />
      <PrivateRoute exact path="/product" layout={DashboardLayout} component={Product} />
      <PrivateRoute exact path="/material" layout={DashboardLayout} component={Material} />
      <PrivateRoute exact path="/generator" layout={DashboardLayout} component={Generator} />
    </Switch>
  );
};

export default Routes;
