import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Layout,
} from 'antd';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

class DashboardLayout extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
  };

  render() {
    const { children, users } = this.props;

    return (
      <div>
        <Layout className="minvh-100">
          <Sidebar />
          <Layout className="minvh-100">
            
            <div className="">
              <div className="row ml-1">
                <div className="col-12 minvh-100 pl-0">
                  <Header {...users} />
                    {children}
                </div>
              </div>
            </div>
          </Layout>
        </Layout>
        {/* <Layout>
          <header>
            <Header />
          </header>
          <div>
            <Row>
              <Col className="main-menu" xs={24} sm={24} md={24} lg={6} xl={5} xxl={4}>
                <Sidebar />
              </Col>
              <Col xs={24} sm={24} md={24} lg={18} xl={19} xxl={20}>
                {children}
              </Col>
            </Row>
          </div>
        </Layout> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.auth.users,
});

export default connect(mapStateToProps)(DashboardLayout);
