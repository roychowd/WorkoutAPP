import React, { Component } from "react";

class logout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="topnav">
          <li className="logoting">
            <img className="logo" src={WorkoutLogo} />
          </li>
          <li className="right right-end item">
            <a
              href="/"
              onClick={e => {
                localStorage.removeItem("jwtToken");
              }}
            >
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
      </div>
    );
  }
}
