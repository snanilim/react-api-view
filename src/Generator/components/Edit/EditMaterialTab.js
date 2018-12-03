import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Table,
  Column,
} from 'antd';
import AddMaterial from '../Common/AddMaterial';
import MaterialcalCulator from '../Common/MaterialCalculator';


class EditMaterialTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: [],
    };
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
              dataIndex="newWeight"
              key="newWeight"
            />
            <Column
              title="Wastage"
              dataIndex="wastage"
              key="wastage"
            />
            <Column
              title="Value"
              dataIndex="newValue"
              key="newValue"
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
    kg: state.generator.kg,
    weight: state.generator.weight,
  };
};

export default withRouter(connect(mapStateToProps)(EditMaterialTab));
