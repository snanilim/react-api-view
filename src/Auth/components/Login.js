import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../authAction';
import { facebookLogin, googleLogin } from '../oauthAction';
import Messages from '../../Others/Messages';

import '../auth.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(login(email, password, this.props));
  }

  handleFacebook() {
    const { dispatch } = this.props;
    dispatch(facebookLogin(this.props));
  }

  handleGoogle() {
    const { dispatch } = this.props;
    dispatch(googleLogin(this.props));
  }

  render() {
    const { email, password } = this.state;
    const { messages } = this.props;
    return (
      <div className="">
        <div className="" style={{ padding: '30px' }}>
          <div className="">
            <Messages messages={messages} />
            <form onSubmit={this.handleLogin.bind(this)}>
              <p className="h2 text-center">Log In</p>
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Email" className="form-control" value={email} onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group">
                <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={password} onChange={this.handleChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-success btn-block btn-lg">Log in</button>

              <div className="form-group text-center"><Link to="/forgot"><small>Forgot your password?</small></Link></div>
            </form>
            <div className="hr-title text-center"><span>or</span></div>
            <div className="btn-group btn-toolbar text-center">
              <button type="button" onClick={this.handleFacebook.bind(this)} className="btn btn-facebook">Sign in with Facebook</button>
              <button type="button" onClick={this.handleGoogle.bind(this)} className="btn btn-google">Sign in with Google</button>
            </div>
          </div>
        </div>
        <p className="text-center mastfoot">
          <small>Dont have an account?</small>
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps)(Login);
