import React from 'react';
import {
  Layout,
  Row,
  Col,
  Menu,
  Icon,
} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class DashboardLayout extends React.Component {
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
    const { children } = this.props;
    return (
      <div>
        <Layout>
          <header>
            <Row>
              <Col xs={24} sm={24} md={24} lg={6} xl={5} xxl={4}>
                <img alt="" src="" />
              </Col>
              <Col xs={24} sm={24} md={24} lg={18} xl={9} xxl={20}>
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
          </header>
          <div>
            <Row>
              <Col className="main-menu" xs={24} sm={24} md={24} lg={6} xl={5} xxl={4}>
                <Menu
                  mode="inline"
                >
                  <Menu.Item key="mail">
                    <Icon type="mail" />
                    Dashboard
                  </Menu.Item>
                  <Menu.Item key="user">
                    <Icon type="user" />
                    User
                  </Menu.Item>
                  <Menu.Item key="role">
                    <Icon type="mail" />
                    Role
                  </Menu.Item>
                  <Menu.Item key="product">
                    <Icon type="mail" />
                    Product
                  </Menu.Item>
                  <Menu.Item key="meterial">
                    <Icon type="mail" />
                    Meterial
                  </Menu.Item>
                  <Menu.Item key="generate">
                    <Icon type="mail" />
                    Generate
                  </Menu.Item>
                </Menu>
              </Col>
              <Col xs={24} sm={24} md={24} lg={18} xl={9} xxl={20}>
                {children}
              </Col>
            </Row>
          </div>
        </Layout>
      </div>
    );
  }
}

export default DashboardLayout;
