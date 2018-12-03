import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Table,
  Column,
} from 'antd';
import AddCost from '../Common/AddCost';
import CostcalCulator from '../Common/CostCalculator';


class CostTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      costs: [],
    };
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
    profitPercentage: state.generator.profitPercentage,
    values: state.generator.values,
  };
};

export default withRouter(connect(mapStateToProps)(CostTab));
