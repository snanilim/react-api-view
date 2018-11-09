import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  Menu,
  Icon,
} from 'antd';


class Sidebar extends React.Component {
  static propTypes = {
    dispatch: PropTypes.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { current: 'mail' };
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <Menu className="ctm-100-vh" mode="inline">
          <Menu.Item key="mail">
            <Icon type="mail" />
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="user">
            <Icon type="user" />
            <Link to="/user">User</Link>
          </Menu.Item>
          <Menu.Item key="role">
            <Icon type="mail" />
            <Link to="/role">Role</Link>
          </Menu.Item>
          <Menu.Item key="product">
            <Icon type="mail" />
            <Link to="/product">Product</Link>
          </Menu.Item>
          <Menu.Item key="meterial">
            <Icon type="mail" />
            <Link to="/material">Material</Link>
          </Menu.Item>
          <Menu.Item key="generate">
            <Icon type="mail" />
            <Link to="/generator">Generator</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user,
  };
};

export default withRouter(connect(mapStateToProps)(Sidebar));
