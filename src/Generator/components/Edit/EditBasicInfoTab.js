import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import {
  Input,
  Row,
  Col,
  DatePicker,
} from 'antd';
import { basicInfo } from '../../generatorAction';

const dateFormat = 'YYYY/MM/DD';

class BasicInfoTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      announceNumber: '',
      dateValue: '',
      presentValue: 0,
    };
  }

  componentWillReceiveProps(newProps) {
    const { basicinfo } = newProps;
    this.setState({
      productName: basicinfo.productName,
      announceNumber: basicinfo.announceNumber,
      presentValue: basicinfo.presentValue,
      dateValue: basicinfo.dateValue,
    });
  }

  onChangeHandler = (event) => {
    console.log('123---------', { [event.target.name]: event.target.value });
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      const { productName, announceNumber, presentValue, dateValue } = this.state;
      console.log('announceNumber', announceNumber);
      const { dispatch } = this.props;
      dispatch(basicInfo(productName, announceNumber, presentValue, dateValue));
    });
  };

  dateChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({
      dateValue: dateString,
    }, () => {
      const { productName, announceNumber, presentValue, dateValue } = this.state;
      const { dispatch } = this.props;
      dispatch(basicInfo(productName, announceNumber, presentValue, dateValue));
    });
  }

  render() {
    const { basicinfo } = this.props;
    console.log('productName', basicinfo.productName);
    return (
      <div>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Input name="productName" defaultValue={basicinfo.productName} onChange={this.onChangeHandler} placeholder="Product Name" />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Input name="announceNumber" defaultValue={basicinfo.announceNumber} onChange={this.onChangeHandler} placeholder="Announce Number" />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Input name="presentValue" defaultValue={basicinfo.presentValue} onChange={this.onChangeHandler} placeholder="Present Value" />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} onChange={this.dateChange} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state.generator.basicinfo);
  return {
    messages: state.messages,
    basicinfo: state.generator.basicinfo,
  };
};

export default withRouter(connect(mapStateToProps)(BasicInfoTab));
