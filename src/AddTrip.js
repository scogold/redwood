import "./styles.css";
import React, { Component } from "react";

// New component enter new trips.
// The component consists of a form with inputs for
// trip name, user name, trip distance, and trip unit.
// Upon submit the input data gets validated.
// The functions for handling the update and the submit are in the parent component.

class AddTrip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // All the properties passed from the main app needd to be specified.
    const enterFun = this.props.enterFun; // Function that saves the entered values on button click.
    const nameDisplayProp = this.props.displayNameFromApp; // Property of the current state of the entered trip name.
    const distDisplayProp = this.props.displayDistFromApp; // Property of the current state of the entered distance.
    const unitDisplayProp = this.props.displayUnitFromApp; // Property of the current state of the entered distance unit.
    const userDisplayProp = this.props.displayUserFromApp; // Property of the current state of the entered user name.
    const nameUpdateFun = this.props.changeFun1; // Function that updates the trip name state variable.
    const distUpdateFun = this.props.changeFun2; // Function that updates the distance state variable.
    const unitUpdateFun = this.props.changeFun3; // Function that updates the distance unit state variable.
    const userUpdateFun = this.props.changeFun4; // Function that updates the user name state variable.
    return (
      <div>
        <hr />
        <h2>Entry Form</h2>
        <p>Add new trip:</p>

        <div>
          {/** Form to enter the required information about a trip. On submit the input will be validated. */}
          <form onSubmit={enterFun}>
            {/** Input for the trip name. It must contain an alphanumeric string of origin-destination.*/}
            <input
              type="text"
              placeholder="Trip Name"
              value={nameDisplayProp}
              onChange={nameUpdateFun}
            />
            {/** Input for the user name. It must contain an alphanumeric string.*/}
            <input
              type="text"
              placeholder="User Name"
              value={userDisplayProp}
              onChange={userUpdateFun}
            />
            {/** This input is for a positivie number as distance travelled. */}
            <input
              type="number"
              min="0"
              placeholder="Distance in km"
              value={distDisplayProp}
              onChange={distUpdateFun}
            />
            {/** Input for the distance unit. Select a value from the dropdown menu.*/} 
            <select value={unitDisplayProp} onChange={unitUpdateFun}>
              <option> km </option>
              <option> m </option>
            </select>
            {/** Submit button to after which the input data gets validated.*/}
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddTrip;
