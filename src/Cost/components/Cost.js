import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Table,
  Divider,
  Column,
  Card,
} from 'antd';
import AddCost from './AddCost';
import { materials } from '../costAction';

class Cost extends React.Component {
  static propTypes = {
    dispatch: PropTypes.isRequired,
    costs: PropTypes.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(materials());
  }

  render() {
    const { costs } = this.props;
    return (
      <Card className="ctm-100-vh">
        <AddCost />
        <div>
          <Table dataSource={materials}>
            <Column
              title="Name"
              dataIndex="name"
              key="name"
            />
            <Column
              title="Weight"
              dataIndex="weight"
              key="weight"
            />
            <Column
              title="Value"
              dataIndex="value"
              key="value"
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a href="javascript:;" onClick={ (e) => this.showDrawer(e, record.id) }>Edit</a>
                  <Divider type="vertical" />
                  <a href="javascript:;">Delete</a>
                </span>
              )}
            />
          </Table>
        </div>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    costs: state.cost.data,
  };
};

export default withRouter(connect(mapStateToProps)(Cost));
