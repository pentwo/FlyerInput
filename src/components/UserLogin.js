import React from "react";

class UserLogin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="title">User Login</h1>
        <form className="form">
          <div className="field">
            <input
              type="text"
              ref={this.userName}
              required
              placeholder="USER NAME"
            />
          </div>
          <div className="field">
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default UserLogin;
