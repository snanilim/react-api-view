import React from 'react';
import {
  Table,
  Divider,
  Button,
  Card,
} from 'antd';
import AddGenerator from './AddGenerator';

const { Column } = Table;

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    };
  }

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <Card className="ctm-100-vh">
        <AddGenerator />
        <div>
          <div style={{ marginBottom: 16 }}>
            <Button
              type="primary"
              onClick={this.start}
              disabled={!hasSelected}
              loading={loading}
            >
              Bulk Download
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table rowSelection={rowSelection} dataSource={data}>
            <Column
                title="Name"
                dataIndex="name"
                key="name"
              />
            <Column
              title="Age"
              dataIndex="age"
              key="age"
            />
            <Column
              title="Address"
              dataIndex="address"
              key="address"
            />
             <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a href="javascript:;">View</a>
                  <Divider type="vertical" />
                  <a href="javascript:;">Download</a>
                </span>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a href="javascript:;">Edit</a>
                  <Divider type="vertical" />
                  <a href="javascript:;">Delete</a>
                </span>
              )}
            />
          </Table>
        </div>
      </Card>
    );
  }
}
export default Generator;
