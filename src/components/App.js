import React from "react";
import FlyersForm from "./FlyersForm";
import FlyerCountTable from "./FlyerCountTable";

class App extends React.Component {
  state = {
    counts: {}
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.props.match.params.user);
    if (localStorageRef) {
      this.setState({ counts: JSON.parse(localStorageRef) });
    }
  }
  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.user,
      JSON.stringify(this.state.counts)
    );
  }

  addRecord = count => {
    const counts = { ...this.state.counts };
    counts[`${Object.keys(counts).length}`] = count;
    this.setState({ counts });
  };

  delRecord = key => {
    const counts = { ...this.state.counts };
    delete counts[key];
    this.setState({ counts });
  };

  render() {
    return (
      <div className="section">
        <h1 className="title">Flyers Recording Syetem</h1>
        <FlyersForm addRecord={this.addRecord} />
        <FlyerCountTable
          counts={this.state.counts}
          delRecord={this.delRecord}
        />
      </div>
    );
  }
}

export default App;
