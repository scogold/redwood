import "./styles.css";
import React, { Component } from "react";

// New component to display all the trips entered.
// It should display the names of the trip, the travelled distance,
// and the saved CO2 for each individual trip.

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
          {/** Input for the trip name. It must contain an alphanumeric string of origin-destination.*/}
          {/** Input for the user name. It must contain an alphanumeric string.*/}
          {/** This input is for a positivie number as distance travelled. */}
          <form onSubmit={enterFun}>
            <input
              type="{enterFun}
              placeholder="Trip Name"
U              value={nameDisplayProp}  U/p>dateFun}
              >onChange={nameUpdatFun}
            />
       t} t yinpup              type="/>pdaF*n}t"text"ameUtdateFex}t"              placeholder="User Nnme"
              vhluge=usmrD<gisplayProp}
i              onChange={usermUpdatFun}t      o laxpm">
nv
 travlled. */}
            <in*ut*
              typ*e="number"
              min="0"
              placeholder="Distance in km"
              value={distDisplayProp}
              onChange={distUpdateFun}
               />
                lec </svalue={unitDisplayProp} onChange={unitUpdateFun}>
           }
fiuriv>  i p</div>}rip;e    );xport default AddTrip;xport default AddTrip;exfault AddTrip;ex
       <  }/form>
   </d} }port default AddTrip;   <input type="submit" value="Submit" />
       <t default AddTrip;xport default AddTrip;export default AddTrip;
