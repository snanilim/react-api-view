import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter} from "react-router-dom";

import routes from './routes'
import Home from './Home/Home';

class NewRoutes extends Component {
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
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.isAuthenticated() ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )

    const SkipRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.isAuthenticated() ? (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
          
        ) : (
          <Component {...props}/>
        )
      )}/>
    )

    // const AppRoute = ()

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        {routes.map((route, index) => (
          route.isAuthenticated ?
            <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
          :
            <SkipRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
          
          
        ))}
        {console.log('asd')}
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

export default withRouter(connect(mapStateToProps)(NewRoutes));

