import React from 'react';
import { Modal, Button, Checkbox, List } from 'antd';

const data = [
    'Racing car',
    'Japanese',
    'Australian walks',
    'Man charged',
    'Los Angeles',
    'Racing car',
    'Japanese',
    'Australian walks',
    'Man charged',
    'Los Angeles',
];

class AddMaterial extends React.Component {
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
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          + Add Material
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            <h3 style={{ margin: '16px 0' }}>Select Material</h3>
            <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => (<List.Item><Checkbox>{item}</Checkbox></List.Item>)}
            />
        </Modal>
      </div>
    );
  }
}

export default AddMaterial;
