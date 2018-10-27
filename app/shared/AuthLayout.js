import React, { Component, Children } from "react";
import {
  Layout,
  Row,
  Col,
} from 'antd';
import "./app.css";

// import Header from '../Header/Header';
// import Footer from '../Others/Footer';


function isAuthenticated(){
  return false;
}

class AuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }



  
  render() {
    const {children} = this.props;
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
            <Row>
                <Col lg={18}>
                    
                </Col>
                <Col lg={6}>
                    {children}
                </Col>
            </Row>
        </Layout>
      </div>
    );
  }
}

export default AuthLayout;
