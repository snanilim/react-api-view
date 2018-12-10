import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, Button } from 'antd';
import TablePrint from './TablePrint';
import { toogleModal } from '../../generatorAction';

class ModlView extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    const { dispatch } = this.props;
    dispatch(toogleModal(false));
  }

  render() {
    return (
      <div>
        <Modal
          title="View Table"
          style={{ top: 20 }}
          visible={this.props.modalVisible}
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
          width={1400}
        >
          <TablePrint />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        modalVisible: state.generator.modalVisible,
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

export default withRouter(connect(mapStateToProps)(ModlView));
