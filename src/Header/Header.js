/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
    Layout,
    Menu, Dropdown, Icon,
    Avatar,
} from 'antd';
import { Link } from 'react-router-dom';

const {
    Header,
} = Layout;

const ProfileMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/profile">
        <Icon className="mr-3" type="user" />
        Profile
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/logout">
        <Icon className="mr-3" type="poweroff" />
        Logout
      </Link>
    </Menu.Item>
  </Menu>
);

const HeadBar = (user) => {
    const { name } = user;
    return (
      <Header className="bg-white row">
        <div className="col-auto mx-auto py-3">
          <span className="h5 float-left" style={{ fontWeight: 300, margin: '2px 0' }}>Dhaka Ceramix</span>
          <div className="clearfix">&nbsp;</div>
        </div>
        <div className="col-auto float-right">
          <Avatar className="mr-2 lh-initial" style={{ backgroundColor: '#87d068' }} icon="user" size="small" />
          <Dropdown overlay={ProfileMenu} placement="bottomRight">
            <a className="ant-dropdown-link text-dark">
              <span className="small text-capitalize font-weight-light">
                Hi,
                { name }
              </span>
              <Icon className="ml-2" type="caret-down" theme="filled" />
            </a>
          </Dropdown>
        </div>
      </Header>
    );
};

export default HeadBar;
// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import {
//   Row,
//   Col,
//   Menu,
//   Icon,
// } from 'antd';
// import { logout } from '../Auth/authAction';


// class Header extends React.Component {
//   static propTypes = {
//     dispatch: PropTypes.isRequired,
//   }

//   handleLogout(event) {
//     event.preventDefault();
//     const { dispatch } = this.props;
//     dispatch(logout(this.props));
//   }

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col xs={24} sm={24} md={24} lg={6} xl={5} xxl={4}>
//             <img alt="" src="" />
//           </Col>
//           <Col xs={24} sm={24} md={24} lg={18} xl={19} xxl={20}>
//             <Menu
//               mode="horizontal"
//             >
//               <Menu.Item key="mail">
//                 <Icon type="mail" />
//                 Dashboard
//               </Menu.Item>
//             </Menu>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.token,
//     user: state.auth.user,
//   };
// };

// export default withRouter(connect(mapStateToProps)(Header));
