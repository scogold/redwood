import "./styles.css";
import React, { Component } from "react";


// Create a new component to display all the trips entered.
// It should display the name of the trip, the name of the user,
// the travelled distance, and the saved CO2 for each individual trip.

class TripHistory extends Component {
  constructor(props) {
    super(props);
  }
  // Function to sort the trips by their CO2 savings.
  compareCo2(a, b) {
    if (a.co2 > b.co2) {
      return -1;
    } else {
      return 1;
    }
  }
  render() {
    const tripHistoryList = this.props.tripHistoryList;
    // The table takes the data of the trips as input and maps it so that
    // it is displayed in the right column.
    return (
      <div>
        <hr />
        <p> See the trip history: </p>

        <table>
          <thead>
            <tr>
              <th>Trip Name</th>
              <th>User Name</th>
              <th>Distance</th>
              <th>CO2 savings</th>
            </tr>
          </thead>
          <tbody>
            {/** The trips get sorted by their CO2 savings before being mapped to table data. */}
            {tripHistoryList.sort(this.compareCo2).map((t) => (
              <tr key={t.tid}>
                <td>{t.tname}</td>
                <td>{t.uname}</td>
                <td>
                  {t.distance} {t.unit}
                </td>
                <td>{t.co2} g</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TripHistory;
