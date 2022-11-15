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
    return(
      <div>
        <input type="text" placeholder="Trip Name"/>
        <input type="number" placeholder="Distance in km"/>
        <button> Add Trip </button>
      </div>
    );
  }
}

class TripHistory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div> See Old Trips Here </div>
    );
  }
}

export default App;