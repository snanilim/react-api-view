import React from 'react';
import {
  Table,
  Divider,
  Tag,
  Card,
  Column,
} from 'antd';
import AddUser from './AddUser';
import EditUser from './EditUser';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Role',
  dataIndex: 'role',
  key: 'role',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Status',
  key: 'status',
  dataIndex: 'status',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Edit</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  role: 'Admin',
  address: 'New York No. 1 Lake Park',
  status: 'Active',
}, {
  key: '2',
  name: 'MR Brown',
  role: 'User',
  address: 'New York No. 1 Lake Park',
  status: 'Active',
}, {
  key: '3',
  name: 'HR Hasan',
  role: 'Admin',
  address: 'New York No. 1 Lake Park',
  status: 'Active',
}, {
  key: '4',
  name: 'MD Rana',
  role: 'Admin',
  address: 'New York No. 1 Lake Park',
  status: 'Active',
}, {
  key: '5',
  name: 'MR Brown',
  role: 'User',
  address: 'New York No. 1 Lake Park',
  status: 'Disable',
}];

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  render() {
    return (
      <Card className="ctm-100-vh">
        <AddUser />
        <EditUser />
        <div>
          <Table dataSource={data}>
            <Column
              title="Name"
              dataIndex="name"
              key="name"
            />
            <Column
              title="Role"
              dataIndex="role"
              key="role"
            />
            <Column
              title="Address"
              dataIndex="address"
              key="address"
            />
            <Column
              title="Status"
              dataIndex="status"
              key="status"
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
export default User;
