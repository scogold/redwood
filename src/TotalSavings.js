import "./styles.css";
import React, { Component } from "react";


// Create a new component to display all the trips entered by a user.
// It should display the names of the trip, the travelled distance,
// and the saved CO2 for each individual trip.

class TotalSavings extends Component {
  constructor(props) {
    super(props);
  }
  
  sumCo2(a, c){
      return a + c.co2
  }
  
  render() {
    const tripHistoryList = this.props.tripHistoryList;
    // The table takes the data of the trips as input and maps it so that
    // it is displayed in the right column.
    return (
      <div>
        <hr />
        <h3> Total Co2 Savings: {Math.round(tripHistoryList.reduce(this.sumCo2,0)*10)/1000} kg </h3>
            
      </div>
    );
    // The factor for the CO2 emissions stays the same.
    // Thereby it can be avoided to save the data in the database.
    // For now it is only calculated on rendering. We could change that to make achievements easier.
  }
}

export default TotalSavings;