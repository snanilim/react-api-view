import React from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from 'antd';
import FullTable from './FullTable';

class TablePrint extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <Button type="primary">Print</Button>}
          content={() => this.componentRef}
        />
        <FullTable ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default TablePrint;
