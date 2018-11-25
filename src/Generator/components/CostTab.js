import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Table,
  Column,
} from 'antd';
import AddCost from './AddCost';
import CostcalCulator from './CostCalculator';
import { costs } from '../generatorAction';


class CostTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      costs: [],
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(costs());
  }

  render() {
    const { costs } = this.props;
    return (
      <div>
        <CostcalCulator />
        <AddCost />
        <div>
          <Table dataSource={costs}>
            <Column
              title="Name"
              dataIndex="name"
              key="name"
            />
            <Column
              title="Weight"
              dataIndex="newWeight"
              key="newWeight"
            />
            <Column
              title="Wastage"
              dataIndex="wastage"
              key="wastage"
            />
            <Column
              title="Value"
              dataIndex="newValue"
              key="newValue"
            />

          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    costs: state.generator.costData,
  };
};

export default withRouter(connect(mapStateToProps)(CostTab));
