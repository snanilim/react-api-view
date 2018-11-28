import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactToPrint from "react-to-print";

class FullTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materials: [],
      costs: [],
     };
  }
  componentDidMount() {
    const { materials, costs } = this.props;
    this.setState({
      materials,
      costs,
    });
  }

  componentWillReceiveProps(newProps) {
    const { materials, costs } = this.props;
    this.setState({
      materials,
      costs,
    });
  }

  render() {
    const { materials, costs } = this.state;
    const materialName = [];
    const materialWeight = [];
    const materialWastage = [];
    const materialNewValue = [];

    const costName = [];
    const costValue = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of materials) {
      materialName.push(
        <ul className="form-check">
          <li>{item.name}</li>
        </ul>,
      );
      materialWeight.push(
        <ul className="form-check">
          <li>{item.newWeight}</li>
        </ul>,
      );
      materialWastage.push(
        <ul className="form-check">
          <li>{item.wastage}</li>
        </ul>,
      );
      materialNewValue.push(
        <ul className="form-check">
          <li>{item.newValue}</li>
        </ul>,
      );
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const item of costs) {
      costName.push(
        <ul className="form-check">
          <li>{item.name}</li>
        </ul>,
      );
      costValue.push(
        <ul className="form-check">
          <li>{item.newValue}</li>
        </ul>,
      );
    }

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <th>4</th>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <th>8</th>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <th>12</th>
              <td>12</td>
              <td>14</td>
              <td>15</td>
              <th>16</th>
            </tr>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td>@</td>
              <td>{materialName}</td>
              <td>{materialWeight}</td>
              <td>{materialWastage}</td>
              <td>{materialNewValue}</td>
              <td>{costName}</td>
              <th>{costValue}</th>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => <a>Print this out!</a>}
//           content={() => this.componentRef}
//         />
//         <FullTable ref={el => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    materials: state.generator.data,
    costs: state.generator.costData,
  };
};

export default withRouter(connect(mapStateToProps)(FullTable));
