import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {tripList: [{name:"new",distance:4,co2:8}], enteredName: "", enteredDist: 0};
    this.updateTripList = this.updateTripList.bind(this);
  }
  
  updateTripList(){
    newTrip = {
      name: this.state.enteredName,
      distance: this.state.enteredDist,
      co2: this.state.enteredDist*1.4
    }
    this.setState({ tripList: this.state.tripList.concat(newTrip)});
  }
  
  updateEnteredName(event){
    this.setState({enteredName:event.target.value })
  }
  updateEnteredDist(event){
    this.setState({enteredDist:event.target.value })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Project Redwood</h1>
        <h2>Track your Co2 Savings From Biking</h2>
        <hr />
        <AddTrip enterFun={this.updateTripList} changeFun1={this.updateEnteredName} changeFun2={this.updateEnteredDist}/>
        <hr />
        <TripHistory tripHistoryList={this.state.tripList}/>
      </div>
    );
  }
}

class AddTrip extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const enterFun = this.props.enterFun;
    const nameUpdateFun = this.props.changeFun1;
    const distUpdateFun = this.props.changeFun2;
    
    return(
      <div>
        <input type="text" placeholder="Trip Name" onChange={nameUpdateFun}/>
        <input type="number" placeholder="Distance in km" onChange={distUpdateFun}/>
        <button onClick={enterFun}> Add Trip </button>
      </div>
    );
  }
}

class TripHistory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tripHistoryList = this.props.tripHistoryList;
    
    return(
      <div>
        <table border="1">
          <tr>
            <th> Name </th>
            <th> Distance </th>
            <th> Co2 Savings </th>
          </tr>
          {tripHistoryList.map((item) => (
            <tr>
              <th> {item.name} </th>
              <th> {item.distance} </th>
              <th> {item.co2} </th>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;