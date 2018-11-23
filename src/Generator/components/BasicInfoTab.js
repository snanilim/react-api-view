import React from 'react';
import {
  Input,
  DatePicker,
  Row,
  Col,
} from 'antd';


function onChange(date, dateString) {
  console.log(date, dateString);
}
const BasicInfoTab = () => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Input placeholder="Product Name" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <DatePicker onChange={onChange} />
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfoTab;
