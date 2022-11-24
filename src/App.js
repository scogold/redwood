import "./styles.css";
import React, { Component } from "react";
import TripHistory from "./TripHistory";
import AddTrip from "./AddTrip";
// Import from the made up trips.js to simulate the behaviour.
import { trips } from "./trips";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tripList: trips, enteredName: "", enteredDist: 0 };
    this.updateTripList = this.updateTripList.bind(this);
    this.updateEnteredName = this.updateEnteredName.bind(this);
    this.updateEnteredDist = this.updateEnteredDist.bind(this);
  }
  // function that triggers on the "Add Trip" button.
  updateTripList() {
    console.log(this.state.enteredName);
    console.log(this.state.enteredDist);
    console.log(this.state.tripList);
    console.log(this.state.tripList.length);
    let newTrip = {
      tid: this.state.tripList.length + 1,
      tname: this.state.enteredName,
      distance: this.state.enteredDist,
      unit: "km",
    };
    console.log(newTrip);
    this.setState({
      tripList: this.state.tripList.concat(newTrip),
      enteredName: "",
      enteredDist: 0,
    });
    console.log(this.state.tripList);
  }

  updateEnteredName(event) {
    console.log("Name entered.");
    this.setState({ enteredName: event.target.value });
  }
  updateEnteredDist(event) {
    console.log("Distance entered.");
    this.setState({ enteredDist: event.target.value });
  }

  // Render the components for adding trips and displaying all trips in a table.
  render() {
    return (
      <div className="App">
        <h1>Project Redwood</h1>
        <h2>Track your Co2 Savings From Biking</h2>
        <hr />
        <AddTrip
          enterFun={this.updateTripList}
          displayNameFromApp={this.state.enteredName}
          displayDistFromApp={this.state.enteredDist}
          changeFun1={this.updateEnteredName}
          changeFun2={this.updateEnteredDist}
        />
        <hr />
        <TripHistory tripHistoryList={this.state.tripList} />
      </div>
    );
  }
}

export default App;
