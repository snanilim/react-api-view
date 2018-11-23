import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Table,
  Column,
  Divider,
} from 'antd';
import AddMaterial from './AddMaterial';
import MaterialcalCulator from './MaterialcalCulator';
import { materials } from '../generatorAction';


class MaterialTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: [],
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(materials());
  }

  render() {
    const { materials } = this.props;
    return (
      <div>
        <MaterialcalCulator />
        <AddMaterial />
        <div>
          <Table dataSource={materials}>
            <Column
              title="Name"
              dataIndex="name"
              key="name"
            />
            <Column
              title="Weight"
              dataIndex="weight"
              key="weight"
            />
            <Column
              title="Wastage"
              dataIndex="wastage"
              key="wastage"
            />
            <Column
              title="Value"
              dataIndex="value"
              key="value"
            />

          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    materials: state.generator.data,
  };
};

export default withRouter(connect(mapStateToProps)(MaterialTab));
