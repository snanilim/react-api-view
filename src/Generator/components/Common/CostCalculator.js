import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  Input,
} from 'antd';
import { changeCostValues } from '../../generatorAction';


class CostcalCulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: 1000,
      profitPercentage: 599,
    };
  }

  componentDidMount() {
    const { values, profitPercentage } = this.props;
    this.setState({
      values,
      profitPercentage,
    });
  }

  componentWillReceiveProps(newProps) {
    const { values, profitPercentage } = newProps;
    this.setState({
      values,
      profitPercentage,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: parseFloat(event.target.value),
    }, () => {
      const { values, profitPercentage } = this.state;
      const { dispatch } = this.props;
      dispatch(changeCostValues(values, profitPercentage));
    });
  }

  render() {
    const { values, profitPercentage } = this.props;
    return (
      <div>
        <Card
          title="Cost Calculator"
        >
          <div className="gutter-example">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">
                  <Input placeholder="values" name="values" defaultValue={values} onChange={this.handleChange} />
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">
                  <Input placeholder="profit percentage" name="profitPercentage" defaultValue={profitPercentage} onChange={this.handleChange} />
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    profitPercentage: state.generator.profitPercentage,
    values: state.generator.values,
  };
};

export default withRouter(connect(mapStateToProps)(CostcalCulator));
