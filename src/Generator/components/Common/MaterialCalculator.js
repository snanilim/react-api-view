import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  Input,
} from 'antd';
import { changePCS } from '../../generatorAction';


class MaterialcalCulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kg: 1000,
      weight: 199,
    };
  }

  componentDidMount() {
    const { kg, weight } = this.props;
    this.setState({
      kg,
      weight,
    });
  }

  componentWillReceiveProps(newProps) {
    const { kg, weight } = newProps;
    this.setState({
      kg,
      weight,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: parseFloat(event.target.value),
    }, () => {
      const { kg, weight } = this.state;
      const { dispatch } = this.props;
      dispatch(changePCS(kg, weight));
    });
  }

  render() {
    const { kg, weight, pisces } = this.props;
    return (
      <div>
        <Card
          title="Material Calculator"
        >
          <div className="gutter-example">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">
                  <Input placeholder="kg" name="kg" defaultValue={kg} onChange={this.handleChange} />
                </div>
              </Col>
              <Col className="gutter-row" span={1}>
                <div className="gutter-box">/</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">
                  <Input placeholder="weight" name="weight" defaultValue={weight} onChange={this.handleChange} />
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
