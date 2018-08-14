import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";
import GitLogo from "./GitLogo.png";
import Dumbell from "./dumbbell.png";
import Burger from "./burger.png";
import Runner from "./runner.png";
import { Link } from "react-router-dom";
import axios from "axios";
//importing jquery;
import $ from "jquery";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

var loggedIn = false;
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: "",
        password: ""
      }
    };

    // required for our component to know the reference for 'this'
    this.onChange = this.onChange.bind(this);
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this);
  }

  onChange = event => {
    // handles the password and username text fields on the form
    const Newcredentials = this.state.credentials;
    Newcredentials[event.target.name] = event.target.value;
    return this.setState({ credentials: Newcredentials });
  };

  onSubmitSignIn = e => {
    // required for signing in
    const user = {
      email: this.state.credentials.email,
      password: this.state.credentials.password
    };
    this.props.loginUser(user, this.props.history);
  };

  render() {
    return (
      <div className="topdiv">
        <Navbar loggedIn={loggedIn} className="navbar" />
        {/* //==========HERE IS THE FIRST SECTION===========// */}
        <div className="col1">
          {/* //===========HERE IS WHERE THE SIGN IN FORM IS DISPLAYED=======// */}
          <main className="pa4 80 FormFontColor">
            <form className="measure center">
              <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend className="f4 fw8 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label
                    className="db fw8 lh-copy f6 fonts"
                    for="email-address"
                  >
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent bg-black hover-bg-black hover-white w-100"
                    type="email"
                    name="email"
                    id="email-address"
                    onChange={this.onChange}
                    value={this.state.credentials.email}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw8 lh-copy f6 fonts" for="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent bg-black hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onChange}
                    value={this.state.credentials.password}
                  />
                </div>
                <label className="pa0 ma0 lh-copy f6 fw8 pointer">
                  <input type="checkbox" /> Remember me{" "}
                </label>
              </fieldset>
              <div className="">
                {/* //Change this to a button pls */}
                <Link
                  to="/Dashboard"
                  className="b ph3 pv2 input-reset ba b--black  bg-black grow pointer f6 dib datButton"
                  onClick={this.onSubmitSignIn}
                >
                  Sign In{" "}
                </Link>
              </div>
              <div className="lh-copy mt3 FormFontColor">
                {/* <a href="/Signup" class="f6 fw8 link  dim FormFontColor db">Sign up</a> */}
                {/* <a href="#0" class="f6  fw8 link dim FormFontColor db">Forgot your password?</a> */}
              </div>
            </form>
          </main>
        </div>
        {/* //======SECOND BANNER========// */}
        <div className="col2">
          <h2 className="peptalk">
            Being able to track your Foods and Excercise is the key to achieving
          </h2>
          <h3 className="peptalk" style={{ color: "white" }}>
            Your Fitness Goals
          </h3>
          <h5 className="peptalk">
            We wish to bring the message of a healthy lifestyle to the students
            of the University of Alberta, and provide them with the neccessary
            tools to do so!
          </h5>
          {/* <div id='homepageCircle' className='"row'>
            <div className='coolCircle col-sm-6'>30</div>
            <div className='coolCircle col-sm-6'>30</div>
          </div> */}
          <circle className="circle">
            <img className="icon" src={Dumbell} />
          </circle>
          <circle className="circle">
            <img className="icon" src={Runner} />
          </circle>
          <circle className="circle">
            <img className="icon" src={Burger} />
          </circle>
        </div>
        {/* //==============Third SECTION==========// */}
        <div className="col3">
          <h5 className="bottomhead">
            Created by{" "}
            <a href="https://github.com/AnkushSharma2698">Ankush Sharma</a> and{" "}
            <a href="https://github.com/roychowd">Dhruba Chowdhury</a>{" "}
          </h5>
          <a className="cover" href="https://github.com/roychowd/WorkoutAPP">
            <img className="gitLogo pointer" src={GitLogo} />
          </a>
        </div>
      </div>
    );
  }
}

//export default Homepage;

//Animation to show on scroll
// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 150) {
//     $('.circle').fadeIn();
//   }
// });

$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    /* Check the location of each desired element */
    $(".circle").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var middle_of_object = $(this).offset().top + $(this).outerHeight() - 100;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > middle_of_object) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });
});

Homepage.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Homepage);
