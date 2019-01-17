import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Modal,
  Button,
  Row,
  Col,
} from 'antd';
import { addCost } from '../../generatorAction';

class AddCost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      costs: [],
    };
  }

  componentDidMount() {
    console.log('newPropscost----', this.props.costs);
    this.setState({
      costs: this.props.costs,
    });
  }

  componentWillReceiveProps(newProps) {
    console.log('newProps', newProps);
    this.setState({
      costs: newProps.costs,
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    const { dispatch } = this.props;
    const { costs } = this.state;
    dispatch(addCost(costs));

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
    const costs = this.state.costs;
    const index = costs.findIndex(item => item.id === id);
    console.log('index', costs[index].view);
    costs[index].view = !costs[index].view;
    this.setState({
      costs,
    });
  }

  render() {
    const { costs } = this.state;
    const checkList = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const item of costs) {
      checkList.push(
        <div className="form-check">
          <input type="checkbox" id={item.id} className="form-check-input" name={item.id} onChange={this.handleInputChange} checked={item.view} />
          <label className="form-check-label" htmlFor={item.id}>{item.name}</label>
        </div>,
      );
    }

    return (
      <div>
        <Row>
          <Col span={8}>
            <h4 className="float-left">Cost List</h4>
          </Col>
          <Col span={8} offset={8}>
            <Button type="primary" onClick={this.showModal}>
              + Update Cost List
            </Button>
          </Col>
        </Row>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h3 style={{ margin: '16px 0' }}>Select Cost</h3>
          {/* <List
          size="large"
          bordered
          dataSource={this.props.costs}
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
    costs: state.generator.allCostData,
  };
};

export default withRouter(connect(mapStateToProps)(AddCost));
