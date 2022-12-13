import "./styles.css";
import React, { Component } from "react";

// This component aggregates the cumulative CO2 savings over all trips.

class TotalSavings extends Component {
  constructor(props) {
    super(props);
  }

  // function to aggregate the co2 savings
  sumCo2(a, c) {
    return a + c.co2;
  }

  render() {
    const tripHistoryList = this.props.tripHistoryList;
    return (
      <div>
        <hr />
        <h3>
          Total CO2 Savings:{" "}
          {Math.round(tripHistoryList.reduce(this.sumCo2, 0)) / 1000} kg
        </h3>
      </div>
    );
  }
}

export default TotalSavings;
