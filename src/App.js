import "./styles.css";
import React, { Component } from "react";
import TripHistory from "./TripHistory";

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
        <hr />
        <TripHistory />
      </div>
    );
  }
}

class AddTrip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Add New Trip Here</div>;
  }
}

export default App;
