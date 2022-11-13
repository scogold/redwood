import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Project Redwood</h1>
        <h2>Track your Co2 Savings From Biking</h2>
        <hr />
        <AddTrip />
      </div>
    );
  }
}

class AddTrip extends Component {}

class TripHistory extends Component {}

export default App;
