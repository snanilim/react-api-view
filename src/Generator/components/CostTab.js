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

  // componentWillReceiveProps(newProps) {
  //   const costList = newProps.costs;
  //   const { profitPercentage } = newProps;
  //   console.log('profitPercentage', newProps.profitPercentage);
  //   if (costList.length > 0) {
  //     let costSum = 0;

  //     // eslint-disable-next-line no-restricted-syntax
  //     for (const item of costList) {
  //       console.log(typeof item.newValue);
  //       costSum += item.newValue;
  //     }

  //     const profit = {};
  //     profit.name = 'profit';
  //     profit.newValue = +((costSum / 100) * parseInt(profitPercentage, 10)).toFixed(2);
  //     const sumWithProfit = costSum + profit.newValue;
  //     const roundSumWithProfit = Math.round(sumWithProfit);
  //     profit.newValue = +(profit.newValue + (roundSumWithProfit - sumWithProfit)).toFixed(2);
  //     costList.push(profit);

  //     this.setState({
  //       costs: costList,
  //     });
  //   }
  // }

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
