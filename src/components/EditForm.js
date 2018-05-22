import React from "react";

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.myFormRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}
  componentDidUpdate() {}

  handleSubmit(e) {
    e.preventDefault();
    const count = {
      DATE: this.props.date,
      AREA: this.myFormRef.current.elements.area.value.toUpperCase(),
      SUB: this.myFormRef.current.elements.sub.value,
      TYPE: this.myFormRef.current.elements.types.value,
      QTY: parseFloat(this.myFormRef.current.elements.qty.value)
    };
    this.props.addRecord(count);
    // e.currentTarget.reset();
  }

  render() {
    return (
      <form
        className="form"
        id="form2"
        onSubmit={this.handleSubmit}
        ref={this.myFormRef}
      >
        <div className="field">
          <label className="label">AREA</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Suburbs"
              name="area"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">SUB-MAP</label>
          <div className="control">
            <select className="input" type="text" name="sub-map" id="sub">
              <option value="MAP-1">MAP 1</option>
              <option value="MAP-2">MAP 2</option>
              <option value="MAP-3">MAP 3</option>
              <option value="MAP-4">MAP 4</option>
              <option value="MAP-5">MAP 5</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">TYPES</label>
          <div className="control is-grouped">
            <input type="radio" name="types" value="SINGLE" defaultChecked />SINGLE
            <input type="radio" name="types" value="WARP" />WARP
            <input type="radio" name="types" value="LAD+SINGLE" />LAD+SINGLE
            <input type="radio" name="types" value="LAD+WARP" />LAD+WARP
          </div>
        </div>
        <div className="field">
          <label className="label">QTY</label>
          <div className="control">
            <input className="input" type="number" name="qty" id="qty" />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button">
            + Add
          </button>
        </div>
      </form>
    );
  }
}

export default EditForm;
