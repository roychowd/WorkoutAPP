import React, { Component } from "react";
import "./Initialcalorie.css";
import { Link } from "react-router-dom";
import store from "../../store";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateDailyCal } from "../../actions/profileActions";

class Initialcalorie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      calories: ""
    };
    this.onChange = this.onChange.bind(this);

    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.)
      this.setState({ id: store.getState().auth.user.id });
    });
  }

  onChange = event => {
    console.log("The fucking shit is", store.getState().auth.user.id);

    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    let user = {
      params: {
        id: store.getState().auth.user.id
      },
      calories: this.state.calories
    };
    this.props.updateDailyCal(user, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <h1>To Personalize Your Profile We Need Some More Information:</h1>
        <small class="form-text text-muted">
          Why? In order to optimize your path to your goal!
        </small>
        <br />
        <div class="form-group">
          <label>Daily Calorie Intake (Cal)</label>
          <input
            name="calories"
            class="form-control btn-outline-primary"
            placeholder=""
            onChange={this.onChange}
          />
        </div>
        <small class="form-text text-muted">
          If you aren't sure click here for some help!
        </small>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tdeecalculator.net/"
          class="float-left btn btn-outline-primary mt-1"
        >
          Calorie Calculator
        </a>
        <br />
        <br />
        <br />
        <div class="form-group">
          <label>Level of Activity</label>
          <div class="container">
            <ul className="activityList">
              <li className="activityItem">
                <input type="radio" id="f-option" name="selector" />
                <label for="f-option">Low</label>
                <small class=" float-right form-text text-muted Information">
                  Physically active only 1-2 times a week.
                  <br />
                </small>
                <div class="check" />
              </li>

              <li className="activityItem">
                <input type="radio" id="s-option" name="selector" />
                <label for="s-option">Medium</label>
                <small class=" float-right form-text text-muted Information">
                  Physically active 3-4 times a week.
                  <br />
                </small>
                <div class="check">
                  <div class="inside" />
                </div>
              </li>

              <li className="activityItem">
                <input type="radio" id="t-option" name="selector" />
                <label for="t-option">High</label>
                <small class=" float-right form-text text-muted Information">
                  Physically active 5-6 times a week.
                  <br />
                </small>
                <div class="check">
                  <div class="inside" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row hain">
          <Link
            to="/Dashboard"
            className="btn btn-primary btn-block bigbutton"
            onClick={this.onSubmit}
          >
            Submit{" "}
          </Link>
          {/* <a href="/Dashboard" class="btn btn-primary btn-block bigbutton">
            Submit{" "}
          </a> */}
        </div>
      </div>
    );
  }
}

Initialcalorie.propTypes = {
  updateDailyCal: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  auth: state.auth;
  profile: state.profile;
};

export default connect(
  mapStateToProps,
  { updateDailyCal }
)(Initialcalorie);
