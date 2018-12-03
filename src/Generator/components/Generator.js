import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Table,
  Divider,
  Card,
} from 'antd';
import AddGenerator from './Add/AddGenerator';
import EditGenerator from './Edit/EditGenerator';
import { generators, toogleDrwer, getOneGenerator } from '../generatorAction';

const { Column } = Table;

class Generator extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(generators());
  }

  showDrawer = (e, id) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(toogleDrwer(true));
    dispatch(getOneGenerator(id));
  };

  render() {
    const { generators } = this.props;
    return (
      <Card className="ctm-100-vh">
        <AddGenerator />
        <EditGenerator />
        <div>
          <Table dataSource={generators}>
            <Column
              title="Product Name"
              dataIndex="name"
              key="name"
            />

            <Column
              title="View"
              key="view"
              render={record => (
                <span>
                  <a href="javascript:;">View</a>
                </span>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={record => (
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
    generators: state.generator.generators,
  };
};

export default withRouter(connect(mapStateToProps)(Generator));
