import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Divider,
  Card,
} from 'antd';
import { login } from '../authAction';
import { facebookLogin, googleLogin } from '../oauthAction';
import Messages from '../../Others/Messages';
const FormItem = Form.Item;

class LoginForm extends React.Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { email, password } = this.state;
    const { messages } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Card style={{ height: '100vh' }} className="">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button ant-btn-block">
            Log in
          </Button>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>,
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Divider>
              or
              <Link to="/signup"> SignUp </Link>
            </Divider>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};
const Login = Form.create()(LoginForm);
export default connect(mapStateToProps)(Login);
