import "./styles.css";
import React, { Component } from "react";

// Create a new component to display all the trips entered by a user.
// It should display the names of the trip, the travelled distance,
// and the saved CO2 for each individual trip.

class AddTrip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const enterFun = this.props.enterFun;
    const nameDisplayProp = this.props.displayNameFromApp;
    const distDisplayProp = this.props.displayDistFromApp;
    const unitDisplayProp = this.props.displayUnitFromApp;
    const nameUpdateFun = this.props.changeFun1;
    const distUpdateFun = this.props.changeFun2;
    const unitUpdateFun = this.props.changeFun3;
    return (
      <div>
        <h1>Entry Form</h1>
        <p>Add New Trip Here:</p>

        <div>
          <form>
            <input
              type="text"
              placeholder="Trip Name"
              value={nameDisplayProp}
              onChange={nameUpdateFun}
            />
            <input
              type="number"
              placeholder="Distance in km"
              value={distDisplayProp}
              onChange={distUpdateFun}
            />
            <select value={unitDisplayProp} onChange={unitUpdateFun}>
              <option> km </option>
              <option> m </option>
            </select>
          </form>
          <button onClick={enterFun}> Add Trip </button>
        </div>
      </div>
    );
  }
}

export default AddTrip;
