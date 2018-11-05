import React from 'react';
import {
  Layout,
  Row,
  Col,
} from 'antd';

const AuthLayout = ({ children = null }) => {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Row>
          <Col lg={18}>
            <img alt="" src="" />
          </Col>
          <Col lg={6}>
            {children}
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default AuthLayout;
