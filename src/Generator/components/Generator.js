import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Table,
  Divider,
  Button,
  Card,
} from 'antd';
import AddGenerator from './AddGenerator';
import EditGenerator from './EditGenerator';
import { generators, toogleDrwer, getOneGenerator } from '../generatorAction';

const { Column } = Table;

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(generators());
  }

  showDrawer = (e, id) => {
    const { dispatch } = this.props;
    dispatch(toogleDrwer(true));
    dispatch(getOneGenerator(id));
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { generators } = this.props;
    return (
      <Card className="ctm-100-vh">
        <AddGenerator />
        <EditGenerator />
        <div>
          <Table dataSource={generators}>
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
                  <a href="javascript:;" onClick={ (e) => this.showDrawer(e, record.id) }>Edit</a>
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

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    generators: state.generator.generators,
  };
};

export default withRouter(connect(mapStateToProps)(Generator));
