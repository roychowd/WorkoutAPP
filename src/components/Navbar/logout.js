import React, { Component } from "react";
import WorkoutLogo from "./WorkoutAppLogo3.png";
import "./Navbar.css";
import $ from "jquery";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class logout extends Component {
  constructor(props) {
    super(props);
    this.onSignout = this.onSignout.bind(this);
  }

  onSignout(event) {
    event.preventDefault();
    this.props.logoutUser(this.props.history);
  }
  render() {
    return (
      <ul className="topnav">
        <li className="logoting">
          <img className="logo" src={WorkoutLogo} />
        </li>
        <li className="right right-end item">
          <a href="/" onClick={this.onSignout}>
            Sign Out
          </a>
        </li>
        <li className="right right-end item">
          <a href="/Profile">Profile</a>
        </li>
        <li className="right right-end item">
          <a href="#contact">Calendar</a>
        </li>
      </ul>
    );
  }
}

$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".topnav").css("background", "#f4f4f4");
      $("ul").css("height", "auto");
      //$(".logo").css("max-height",'50%');
    } else {
      $(".topnav").css("background", "#000");
      $("ul").css("height", "auto");
      //$(".logo").css("max-height",'15%');
    }
  });
});

logout.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { logoutUser }
)(withRouter(logout));
