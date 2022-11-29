import "./styles.css";
import React, { Component } from "react";
import TripHistory from "./TripHistory";
import AddTrip from "./AddTrip";
// Import from the made up trips.js to simulate the behaviour.
import { trips } from "./trips";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tripList: trips, enteredName: "", enteredUnit: "km", enteredDist: 0 };
    this.updateTripList = this.updateTripList.bind(this);
    this.updateEnteredName = this.updateEnteredName.bind(this);
    this.updateEnteredDist = this.updateEnteredDist.bind(this);
    this.updateEnteredUnit = this.updateEnteredUnit.bind(this);
  }
  updateTripList() {
    console.log(this.state.enteredName);
    console.log(this.state.enteredDist);
    console.log(this.state.enteredUnit);
    console.log(this.state.tripList);
    console.log(this.state.tripList.length);
    
    var co2_savings;
    
    if(this.state.enteredUnit === "m"){
      co2_savings = (this.state.enteredDist * 138.4) / 1000
    }
    else{ //for km 
      co2_savings = this.state.enteredDist * 138.4
    }
    
    let newTrip = {
      tid: this.state.tripList.length + 1,
      tname: this.state.enteredName,
      distance: this.state.enteredDist,
      unit: this.state.enteredUnit,
      co2: Math.round(co2_savings*100)/100 //Round to 2 digits
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
  updateEnteredUnit(event) {
    console.log("Unit entered.");
    this.setState({ enteredUnit: event.target.value });
  }

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
          displayUnitFromApp={this.state.enteredUnit}
          changeFun1={this.updateEnteredName}
          changeFun2={this.updateEnteredDist}
          changeFun3={this.updateEnteredUnit}
        />
        <hr />
        <TripHistory tripHistoryList={this.state.tripList} />
      </div>
    );
  }
}

export default App;
