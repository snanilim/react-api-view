import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  Input,
} from 'antd';
import { changePCS } from '../generatorAction';


class MaterialcalCulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kg: 1000,
      weight: 1,
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      const { kg, weight } = this.state;
      const { dispatch } = this.props;
      dispatch(changePCS(kg, weight, (kg / weight).toFixed(2)));
    });
  }

  render() {
    const { kg, weight, pisces } = this.props;
    console.log('weight', weight);
    return (
      <div>
        <Card
          title="Material Calculator"
        >
          <div className="gutter-example">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">
                  <Input placeholder="kg" name="kg" value={kg} onChange={ (e) => this.handleChange(e) } />
                </div>
              </Col>
              <Col className="gutter-row" span={1}>
                <div className="gutter-box">/</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">
                  <Input placeholder="weight" name="weight" value={weight} onChange={ (e) => this.handleChange(e) } />
                </div>
              </Col>
              <Col className="gutter-row" span={1}>
                <div className="gutter-box">=</div>
              </Col>
              <Col className="gutter-row" span={10}>
                <div className="gutter-box">
                  <Input placeholder="Pisces" value={pisces} />
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
    kg: state.generator.kg,
    weight: state.generator.weight,
    pisces: state.generator.pisces,
  };
};

export default withRouter(connect(mapStateToProps)(MaterialcalCulator));
