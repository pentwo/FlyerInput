import React from "react";

class FlyerCountTable extends React.Component {
  componentDidUpdate() {
    console.log(Object.keys(this.props.counts));
  }

  handleDel = e => {
    // e.currentTarget
    // console.log("e.currentTarget: ", e.currentTarget.attributes.index.value);
    this.props.delRecord(e.currentTarget.attributes.index.value);
  };

  render() {
    return (
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th />
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
              <td>
                <button
                  index={key}
                  className="button is-small is-danger"
                  onClick={this.handleDel}
                >
                  <span class="icon is-small">
                    <i class="fas fa-times-circle" />
                  </span>
                </button>
              </td>
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
