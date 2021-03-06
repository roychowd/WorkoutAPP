import React, { Component } from "react";
import "./Navbar.css";
import WorkoutLogo from "./WorkoutAppLogo3.png";
import LOGOUT from "./logout";
import $ from "jquery";

const Navbar = props => {
  if (!props.loggedIn) {
    return (
      <ul className="topnav">
        <li className="logoting">
          <img className="logo" src={WorkoutLogo} />
        </li>
        <li className="right right-end item">
          <a href="/Signup">Sign Up</a>
        </li>
        <li className="right right-end item">
          <a href="#contact">About</a>
        </li>
      </ul>
    );
  } else {
    return <LOGOUT />;
  }
};

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

export default Navbar;
