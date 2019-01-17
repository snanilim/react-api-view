import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  Layout,
  Menu,
  Icon,
} from 'antd';


const {
  Sider,
} = Layout;


class Sidebar extends React.Component {
  state = {
    collapsed: true,
};

onCollapse = (collapsed) => {
    this.setState({ collapsed });
}

toggle = () => {
    const { collapsed } = this.state;
    this.setState({
        collapsed: !collapsed,
    });
}

  render() {
    const { location } = this.props;
    console.log(location);
    const { collapsed } = this.state;
    return (
      <Sider className="shadow bg-white" collapsible collapsed={collapsed} trigger={null}>
        <div className="text-center h4 text-primary py-3 mb-0">
          <Icon
            className="trigger pointer"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </div>
        <Menu className="h-100 border-0 " theme="light" selectedKeys={location.pathname} mode="inline">
          <Menu.Item key="dashboard">
            <Icon type="dashboard" />
            <span>Dashboard</span>
            <Link to="/dashboard" />
          </Menu.Item>
          <Menu.Item key="user">
            <Icon type="user-add" />
            <span>User</span>
            <Link to="/user" />
          </Menu.Item>
          <Menu.Item key="material">
            <Icon type="experiment" />
            <span>Material</span>
            <Link to="/material" />
          </Menu.Item>
          <Menu.Item key="cost">
            <Icon type="dollar" />
            <span>Cost</span>
            <Link to="/cost" />
          </Menu.Item>
          <Menu.Item key="generator">
            <Icon type="deployment-unit" />
            <span>Generator</span>
            <Link to="/generator" />
          </Menu.Item>
        </Menu>
      </Sider>
    );
    // return (
    //   <div>
    //     <Menu className="ctm-100-vh" mode="inline">
    //       <Menu.Item key="mail">
    //         <Icon type="mail" />
    //         <Link to="/dashboard">Dashboard</Link>
    //       </Menu.Item>
    //       <Menu.Item key="user">
    //         <Icon type="user-add" />
    //         <Link to="/user">User</Link>
    //       </Menu.Item>
    //       <Menu.Item key="meterial">
    //         <Icon type="experiment" />
    //         <Link to="/material">Material</Link>
    //       </Menu.Item>
    //       <Menu.Item key="cost">
    //         <Icon type="dollar" />
    //         <Link to="/cost">Cost</Link>
    //       </Menu.Item>
    //       <Menu.Item key="generate">
    //         <Icon type="deployment-unit" />
    //         <Link to="/generator">Generator</Link>
    //       </Menu.Item>
    //     </Menu>
    //   </div>
    // );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user,
  };
};

export default withRouter(connect(mapStateToProps)(Sidebar));
