import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import store from "../../store";
import { loadMuscle, fetchTableData } from "../../helpers/loadTableData";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class workoutTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muscle: ""
    };
  }

  componentDidMount = () => {
    var loadedMuscle = loadMuscle();
    this.setState({ muscle: loadedMuscle }, () => {
      console.log(this.state.muscle);
    });
  };

  render() {
    return (
      <div>
        <Navbar loggedIn={true} />
      </div>
    );
  }
}

export default workoutTable;
