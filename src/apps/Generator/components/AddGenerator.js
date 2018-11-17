import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Tabs,
} from 'antd';
import ProductTab from './ProductTab';
import MaterialTab from './MaterialTab';

const TabPane = Tabs.TabPane;

class AddGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  callback = (key) => {
    console.log(key);
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Row>
          <Col span={8}>
            <h4 className="float-left">Generator List</h4>
          </Col>
          <Col span={8} offset={8}>
            <Button className="float-right" type="primary" onClick={this.showDrawer}>
              + Add New Generator
            </Button>
          </Col>
        </Row>

        <Drawer
          title="Create"
          width={820}
          placement="right"
          onClose={this.onClose}
          maskClosable={false}
          visible={visible}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Products" key="1"><ProductTab /></TabPane>
            <TabPane tab="Materials" key="2"><MaterialTab /></TabPane>
          </Tabs>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">Submit</Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default AddGenerator;
