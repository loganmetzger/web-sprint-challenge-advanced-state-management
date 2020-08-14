import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux"
import { getSmurfs } from "../store/actions/smurfActions"

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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {getSmurfs})(App);
