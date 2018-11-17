import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Row,
  Col,
  Card,
} from 'antd';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const DashboardLayout = ({ children = null }) => {
  return (
    <div>
      <Layout>
        <header>
          <Header />
        </header>
        <div>
          <Row>
            <Col className="main-menu" xs={24} sm={24} md={24} lg={6} xl={5} xxl={4}>
              <Sidebar />
            </Col>
            <Col xs={24} sm={24} md={24} lg={18} xl={19} xxl={20}>
              <Card className="ctm-min-100-vh">
                {children}
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
export default DashboardLayout;
