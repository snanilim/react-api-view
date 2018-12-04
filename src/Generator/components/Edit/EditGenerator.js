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
import EditBasicInfoTab from './EditBasicInfoTab';
import EditMaterialTab from './EditMaterialTab';
import EditCostTab from './EditCostTab';
import TablePrint from '../Common/TablePrint';
import { updateGenerator, toogleDrwer } from '../../generatorAction';

const TabPane = Tabs.TabPane;

class EditGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  onSave = () => {
    const {
      generatorId,
      materials,
      costs,
      profitPercentage,
      values,
      kg,
      weight,
      basicinfo,
    } = this.props;
    const { dispatch } = this.props;

    dispatch(updateGenerator(generatorId,
      materials,
      costs,
      profitPercentage,
      values,
      kg,
      weight,
      basicinfo));
  }

  onClose = () => {
    const { dispatch } = this.props;
    dispatch(toogleDrwer(false));
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
            <TabPane tab="Basic Info" key="1"><EditBasicInfoTab /></TabPane>
            <TabPane tab="Materials" key="2"><EditMaterialTab /></TabPane>
            <TabPane tab="Cost" key="3"><EditCostTab /></TabPane>
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
    generatorId: state.generator.id,
    visible: state.generator.visible,
    materials: state.generator.data,
    costs: state.generator.costData,
    profitPercentage: state.generator.profitPercentage,
    values: state.generator.values,
    kg: state.generator.kg,
    weight: state.generator.weight,
    basicinfo: state.generator.basicinfo,
  };
};

export default withRouter(connect(mapStateToProps)(EditGenerator));
