import React from "react";
import FlyersForm from "./FlyersForm";
import FlyerCountTable from "./FlyerCountTable";

class App extends React.Component {
  state = {
    counts: {}
  };

  addRecord = count => {
    const counts = { ...this.state.counts };
    counts[`${Object.keys(counts).length}`] = count;
    this.setState({ counts });
  };

  render() {
    return (
      <div className="section">
        <h1 className="title">Flyers Recording Syetem</h1>
        <FlyersForm addRecord={this.addRecord} />
        <FlyerCountTable counts={this.state.counts} />
      </div>
    );
  }
}

export default App;
