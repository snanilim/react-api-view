import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Menu,
  Icon,
} from 'antd';
import { logout } from '../apps/Auth/authAction';


class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.isRequired,
  }

  handleLogout(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(logout(this.props));
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={6} xl={5} xxl={4}>
            <img alt="" src="" />
          </Col>
          <Col xs={24} sm={24} md={24} lg={18} xl={19} xxl={20}>
            <Menu
              mode="horizontal"
            >
              <Menu.Item key="mail">
                <Icon type="mail" />
                Dashboard
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
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

export default withRouter(connect(mapStateToProps)(Header));
