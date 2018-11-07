import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Row,
  Col,
} from 'antd';

const AuthLayout = ({ children = null }) => {
  return (
    <div>
      <Layout className="ctm-100-vh">
        <Row>
          <Col lg={18} className="ctm-100-vh ctm-overflow-hide">
            <img src="/img/bg-19.jpg" className="img-fluid" alt="Responsive" />
          </Col>
          <Col lg={6}>
            {children}
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
export default AuthLayout;
