import React from 'react';
import {
  Layout,
  Row,
  Col,
} from 'antd';

const AuthLayout = () => {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Row>
          <Col lg={18}>
            <img alt="" src="" />
          </Col>
          <Col lg={6}>
            {this.props.children}
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default AuthLayout;
