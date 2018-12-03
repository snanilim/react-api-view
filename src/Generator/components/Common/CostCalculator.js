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
      profitPercentage: 5,
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
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
                  <Input placeholder="value" name="value" value={values} onChange={ (e) => this.handleChange(e) } />
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">
                  <Input placeholder="profit percentage" name="profitPercentage" value={profitPercentage} onChange={ (e) => this.handleChange(e) } />
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
