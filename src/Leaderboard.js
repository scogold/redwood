import "./styles.css";
import React, { Component } from "react";

// Create a new component to display the user aggregates.

class Leaderboard extends Component {
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
  // Function to aggregate CO2 savings.
  aggregateCO2(acc, c) {
    return acc + c.co2;
  }
  // Function to filter for name
  nameSearch(filterName) {
    return function (userObject) {
      let targetName = userObject.uname;
      // The filterName must be included in the user name and must be of same length to ensure exact matches.
      return (
        targetName.length === filterName.length &&
        targetName.includes(filterName)
      );
    };
  }
  // Function to group by user
  groupUsers(l) {
    let uniqueNames = [];
    // Push each user name once to the list of uniqueNames.
    let uniqueUsers = l.filter((element) => {
      let isDuplicate = uniqueNames.includes(element.uname);
      if (!isDuplicate) {
        uniqueNames.push(element.uname);
        return true;
      } else return false;
    });
    // Generate a new list that aggregates all co2 savings per unique user name.
    let aggList = uniqueNames.map((u) => ({
      uname: u,
      // Use a filter function to get all entries for exactly the currenct user name.
      co2: l.filter(this.nameSearch(u)).reduce(this.aggregateCO2, 0),
    }));
    return aggList;
  }

  render() {
    const tripHistoryList = this.props.tripHistoryList;

    // The table takes the data of the trips as input and maps it so that
    // it is displayed in the right column.
    return (
      <div>
        <hr />
        <h2>Leaderboard</h2>
        <p> See the leaderboard: </p>

        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User Name</th>
              <th>CO2 savings</th>
            </tr>
          </thead>
          <tbody>
            {/** The co2 savings of each individual user get aggregated,
             * the users are sorted by the highest savings
             * before being mapped to table data. */}
            {this.groupUsers(tripHistoryList)
              .sort(this.compareCo2)
              .map((t, i) => (
                <tr key={t.tid}>
                  <td>{i + 1}</td>
                  <td>{t.uname}</td>
                  <td>{t.co2} g</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;
