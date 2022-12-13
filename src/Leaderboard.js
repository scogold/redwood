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
  aggregateCO2(acc, c){
      return acc + c.co2;
  }
  // Function to filter for name
  nameSearch(filterName){
    return function (userObject){
      let targetName = userObject.uname;
      return targetName.includes(filterName);
    }
  }
  // Function to group by user
  groupUsers(l){
      let uniqueNames = [];
      let uniqueUsers = l.filter((element) => {
          let isDuplicate = uniqueNames.includes(element.uname);
          if(!isDuplicate){
              uniqueNames.push(element.uname);
              return true;
          }
          else return false;
      }
      );
      let aggList = uniqueNames.map((u) => (
        {uname: u, 
        co2: l.filter(this.nameSearch(u)).reduce(this.aggregateCO2,0)
        }
      ));
      return aggList;
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
              <th>Rank</th>
              <th>User Name</th>
              <th>CO2 savings</th>
            </tr>
          </thead>
          <tbody>
            {/** The trips get sorted by their CO2 savings before being mapped to table data. */}
            {this.groupUsers(tripHistoryList).sort(this.compareCo2).map((t, i) => (
              <tr key={t.tid}>
                <td>{i+1}</td>
                <td>{t.uname}</td>
                <td>{t.co2} g</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    );
    // The factor for the CO2 emissions stays the same.
    // Thereby it can be avoided to save the data in the database.
    // For now it is only calculated on rendering. We could change that to make achievements easier.
  }
}

export default Leaderboard;
