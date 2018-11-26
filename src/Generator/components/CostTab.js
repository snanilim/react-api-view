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

  componentWillReceiveProps(newProps) {
    const costList = newProps.costs;
    if (costList.length > 0) {
      const costSum = costList.reduce((a, b) => a.newValue + b.newValue);
      const profit = {};
      profit.name = 'profit';
      profit.newValue = +((costSum / 100) * 5).toFixed(2);
      const sumWithProfit = costSum + profit.newValue;
      const roundSumWithProfit = Math.round(sumWithProfit);
      profit.newValue = +(profit.newValue + (roundSumWithProfit - sumWithProfit)).toFixed(2);
      costList.push(profit);

      this.setState({
        costs: costList,
      });
    }
  }

  render() {
    const { costs } = this.state;
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
  };
};

export default withRouter(connect(mapStateToProps)(CostTab));
