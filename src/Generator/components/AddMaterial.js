import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Modal,
  Button,
  Row,
  Col,
} from 'antd';
import { addMaterial } from '../generatorAction';

class AddMaterial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      materials: [],
    };
  }

  componentWillReceiveProps(newProps) {
    console.log('newProps', newProps);
    this.setState({
      materials: newProps.materials,
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    const { dispatch } = this.props;
    const { materials } = this.state;
    dispatch(addMaterial(materials));

    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({
      visible: false,
    });
  }

  handleInputChange = (event) => {
    const id = event.target.name;
    const materials = this.state.materials;
    const index = materials.findIndex(item => item.id === id);
    console.log('index', materials[index].view);
    materials[index].view = !materials[index].view;
    this.setState({
      materials,
    });
  }

  render() {
    const { materials } = this.state;
    const checkList = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const i of materials) {
      checkList.push(
        <div className="form-check">
          <input type="checkbox" id={materials[i].id} className="form-check-input" name={materials[i].id} onChange={this.handleInputChange} checked={materials[i].view} />
          <label className="form-check-label" htmlFor={materials[i].id}>{materials[i].name}</label>
        </div>,
      );
    }

    return (
      <div>
        <Row>
          <Col span={8}>
            <h4 className="float-left">Material List</h4>
          </Col>
          <Col span={8} offset={8}>
            <Button type="primary" onClick={this.showModal}>
              + Update Material List
            </Button>
          </Col>
        </Row>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h3 style={{ margin: '16px 0' }}>Select Material</h3>
          {/* <List
          size="large"
          bordered
          dataSource={this.props.materials}
          renderItem={item => (<List.Item><Checkbox>{item}</Checkbox></List.Item>)}
          /> */}
          {checkList}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    materials: state.generator.allData,
  };
};

export default withRouter(connect(mapStateToProps)(AddMaterial));
