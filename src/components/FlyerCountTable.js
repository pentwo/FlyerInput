import React from "react";

class FlyerCountTable extends React.Component {
  componentDidUpdate() {
    console.log(Object.keys(this.props.counts));
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>AREA</th>
            <th>SUB-MAP</th>
            <th>TYPES</th>
            <th>QTY</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.counts).map(key => (
            <tr key={key}>
              <td>{this.props.counts[key].DATE}</td>
              <td>{this.props.counts[key].AREA}</td>
              <td>{this.props.counts[key].SUB}</td>
              <td>{this.props.counts[key].TYPE}</td>
              <td>{this.props.counts[key].QTY}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default FlyerCountTable;
