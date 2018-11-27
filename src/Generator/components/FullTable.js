import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactToPrint from "react-to-print";

class FullTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  render() {
    const { materials, costs } = this.props;
    const materialList = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of materials) {
      materialList.push(
        <ul className="form-check">
          <li>{item.name}</li>
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
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <th>{materialList}</th>

              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a>Print this out!</a>}
          content={() => this.componentRef}
        />
        <FullTable ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    materials: state.generator.data,
    costs: state.generator.costData,
  };
};

export default withRouter(connect(mapStateToProps)(Example));
