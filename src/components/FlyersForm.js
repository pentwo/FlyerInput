import React from "react";
import EditForm from "./EditForm";

class FlyersForm extends React.Component {
  constructor(props) {
    super(props);
    this.dateRef = React.createRef();
    this.today = new Date().toJSON().slice(0, 10);
  }
  state = {
    today: new Date().toJSON().slice(0, 10)
  };
  handleDate = e => {
    this.setState({
      today: e.currentTarget.value
    });
  };

  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <React.Fragment>
        <div className="section">
          <form className="form" id="form1">
            <div className="field">
              <label className="label">DATE</label>
              <input
                className="input"
                type="date"
                defaultValue={this.state.today}
                name="date"
                ref={this.dateRef}
                id="input.date"
                onChange={this.handleDate}
              />
            </div>
          </form>
          <div className="field">
            <EditForm
              date={this.state.today}
              addRecord={this.props.addRecord}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FlyersForm;
