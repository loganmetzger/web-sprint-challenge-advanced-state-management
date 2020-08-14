import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux"
import { getSmurfs } from "../store/actions/smurfActions"
import SmurfContainer  from './SmurfContainer'
import Form from "./Form"

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>Smurfing up this sprint</h1>
        <Form />
        <SmurfContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {getSmurfs})(App);
