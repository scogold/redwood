import "./styles.css";
import React, { Component } from "react";
import TripHistory from "./TripHistory";
import AddTrip from "./AddTrip";

import TotalSavings from "./TotalSavings";
import Leaderboard from "./Leaderboard";

// Import from the made up trips.js to simulate the behaviour.
import { trips } from "./trips";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripList: trips, // list of all trips with a dummy list for showcasing read in
      enteredName: "", // current value of the trip name input
      enteredUnit: "km", // current value of the distance unit selection
      enteredDist: 0, // current value of the distance input
      enteredUser: "", // current value of the user name input
      leaderboardView: 0, // for the conditional rendering of the views.
      error: null, // for the error message and the conditional rendering of the message.
    };
    this.updateTripList = this.updateTripList.bind(this);
    this.updateEnteredName = this.updateEnteredName.bind(this);
    this.updateEnteredDist = this.updateEnteredDist.bind(this);
    this.updateEnteredUnit = this.updateEnteredUnit.bind(this);
    this.updateEnteredUser = this.updateEnteredUser.bind(this);
    this.changeViewToLeaderboard = this.changeViewToLeaderboard.bind(this);
    this.changeViewToTrips = this.changeViewToTrips.bind(this);
  }
  // Function to save a new trip.
  updateTripList(event) {
    console.log(this.state.enteredName);
    console.log(this.state.enteredDist);
    console.log(this.state.enteredUnit);
    console.log(this.state.tripList);
    console.log(this.state.tripList.length);

    event.preventDefault();

    // enteredName must not be empty.
    // The error state will save the respective error message.
    if (this.state.enteredName.trim() === "") {
      this.setState({ error: "Trip name field must not be empty." });
      console.log(this.state.error);
    }
    // enteredUser must not be empty.
    else if (this.state.enteredUser.trim() === "") {
      this.setState({ error: "User name field must not be empty." });
      console.log(this.state.error);
    }
    // enteredName must include '-', an origin and a destination in alphanumerical.
    else if (!/^[a-zA-Z0-9]+-[a-zA-Z0-9]+$/.test(this.state.enteredName)) {
      this.setState({
        error:
          'Trip name must include alphanumeric [a-zA-Z0-9] origin and destination as well as the character "-".',
      });
      console.log(this.state.error);
    }
    // enteredUser must be alphanumerical.
    else if (!/^[a-zA-Z0-9]+$/.test(this.state.enteredUser)) {
      this.setState({
        error: "User name must must be alphanumerical [a-zA-Z0-9].",
      });
      console.log(this.state.error);
    }
    // enteredDist must be bigger than 0.
    else if (this.state.enteredDist <= 0) {
      this.setState({
        error: "The trip distance must be bigger than 0.",
      });
      console.log(this.state.error);
    }
    // Else add the new entry to the list
    else {
      this.setState({ error: null });
      // Source for CO2 factor: https://www.nimblefins.co.uk/average-co2-emissions-car-uk
      var co2_savings;
      
      // calculate the co2 savings per distance unit
        // for m
      if (this.state.enteredUnit === "m") {
        co2_savings = (this.state.enteredDist * 138.4) / 1000;
      } else {
        // for km
        co2_savings = this.state.enteredDist * 138.4;
      }
      
      // the values from the input form get combined in a new object
      let newTrip = {
        tid: this.state.tripList.length + 1,
        tname: this.state.enteredName,
        uname: this.state.enteredUser,
        distance: this.state.enteredDist,
        unit: this.state.enteredUnit,
        co2: Math.round(co2_savings * 100) / 100, //Round to 2 digits
      };
      console.log(newTrip);
      this.setState({
        tripList: this.state.tripList.concat(newTrip),
        enteredName: "",
        enteredUser: "",
        enteredDist: 0,
      });
      console.log(this.state.tripList);
    }
  }
  // Function to update state variable for the trip name.
  updateEnteredName(event) {
    console.log("Name entered.");
    this.setState({ enteredName: event.target.value });
  }
  // Function to update state variable for the distance.
  updateEnteredDist(event) {
    console.log("Distance entered.");
    this.setState({ enteredDist: event.target.value });
  }
  // Function to update state variable for the distance unit.
  updateEnteredUnit(event) {
    console.log("Unit entered.");
    this.setState({ enteredUnit: event.target.value });
  }
  // Function to update state variable for the user.
  updateEnteredUser(event) {
    console.log("Unit entered.");
    this.setState({ enteredUser: event.target.value });
  }
  // Function to change the state variable for the conditional rendering of the view.
  // When the button for the leaderboard is pressed. The variable is set to 1.
  changeViewToLeaderboard() {
    if (this.state.leaderboardView === 1)
      console.log(
        "Leaderboard button was pressed althoug already on the view."
      );
    else this.setState({ leaderboardView: 1 });
    console.log(this.state.leaderboardView);
  }
  // Function to change the state variable for the conditional rendering of the view.
  // When the button for the personal trips is pressed. The variable is set to 0.
  changeViewToTrips() {
    if (this.state.leaderboardView === 0)
      console.log(
        "Personal trips button was pressed althoug already on the view."
      );
    else this.setState({ leaderboardView: 0 });
    console.log(this.state.leaderboardView);
  }

  render() {
    return (
      <div className="App">
        <h1>Team Redwood - Carbon Cycle</h1>
        <h2>Track Your CO2 Savings From Biking</h2>
        
        {/** Buttons to switch between the two conditional rendering views. */}
        <button onClick={this.changeViewToTrips}> Trips </button>
        <button onClick={this.changeViewToLeaderboard}> Leaderboard </button>
        
        {/** Conditional rendering of the respective component depending on the selected view. */}
        {this.state.leaderboardView === 0 && (
          <AddTrip
            enterFun={this.updateTripList}
            displayNameFromApp={this.state.enteredName}
            displayDistFromApp={this.state.enteredDist}
            displayUnitFromApp={this.state.enteredUnit}
            displayUserFromApp={this.state.enteredUser}
            changeFun1={this.updateEnteredName}
            changeFun2={this.updateEnteredDist}
            changeFun3={this.updateEnteredUnit}
            changeFun4={this.updateEnteredUser}
          />
        )}
        {this.state.leaderboardView === 0 && this.state.error !== null && (
          <b style={{ color: "red" }}>{this.state.error}</b>
        )}
        {this.state.leaderboardView === 0 && (
          <TripHistory tripHistoryList={this.state.tripList} />
        )}

        {this.state.leaderboardView === 1 && (
          <Leaderboard tripHistoryList={this.state.tripList} />
        )}
        
        {/* No conditional rendering because the total CO2 savings are relevant for both views. */}
        <TotalSavings tripHistoryList={this.state.tripList} />
      </div>
    );
  }
}

export default App;
