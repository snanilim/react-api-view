import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Tabs,
} from 'antd';
import BasicInfoTab from './BasicInfoTab';
import MaterialTab from './MaterialTab';
import CostTab from './CostTab';
import TablePrint from './TablePrint';
import { createGenerator } from '../generatorAction';

const TabPane = Tabs.TabPane;

class EditGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  onSave = () => {
    const { materials, costs, profitPercentage, basicinfo } = this.props;
    const { dispatch } = this.props;

    dispatch(createGenerator(materials, costs, profitPercentage, basicinfo));
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
    const { visible, basicinfo } = this.props;
    console.log('123', basicinfo);
    return (
      <div>
        <Drawer
          title="Create"
          width={1220}
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
            <TabPane tab="Basic Info" key="1"><BasicInfoTab /></TabPane>
            <TabPane tab="Materials" key="2"><MaterialTab /></TabPane>
            <TabPane tab="Cost" key="3"><CostTab /></TabPane>
            <TabPane tab="Full Table" key="4"><TablePrint /></TabPane>
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
            <Button onClick={this.onSave} type="primary">Save</Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    visible: state.generator.visible,
    materials: state.generator.data,
    costs: state.generator.costData,
    profitPercentage: state.generator.profitPercentage,
    basicinfo: state.generator.basicinfo,
  };
};

export default withRouter(connect(mapStateToProps)(EditGenerator));
