import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./ExerciseView.css";
import Cardi from "../../presentational/cardi";
import { Container, Row, Col } from "reactstrap";
import shoulders from "./WorkoutPictures/shoulders2.jpg";
import upperarm from "./WorkoutPictures/arms-triceps.jpg";
import f2 from "./WorkoutPictures/forearm2.jpg";
import back from "./WorkoutPictures/back.jpg";
import waist from "./WorkoutPictures/waist.jpg";
import legs from "./WorkoutPictures/legs.jpg";
import neck from "./WorkoutPictures/neck.jpg";
import chest from "./WorkoutPictures/chest.jpg";
import cardio from "./WorkoutPictures/cardio.jpg";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { grabExerciseTable } from "../../actions/exerciseActions";

class ExerciseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseType: ""
    };
  }

  onClick = content => {
    console.log(content);
    let item = {
      params: {
        muscle: content
      }
    };
    this.props.grabExerciseTable(item, this.props.history);
  };

  render() { 
    return (
      <div>
        <Navbar loggedIn={true} />
        <Container className="mt-5">
          <Row>
            <Col sm="12">
              <h2 id="page-title" className="page-header">
                Exercises
              </h2>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col sm="12">
              <h4 className="page-header">
                Select a body part to view their Exercises
              </h4>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col sm="4">
              <Cardi
                image={shoulders}
                content={"Shoulder"}
                title={"Shoulders"}
                description={"Train your shoulders to become boulders!"}
                onClick={this.onClick}
                ButtonText={"View Exercises"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={back}
                content={"Back"}
                title={"Back"}
                description={"Build a stronger and bigger back!"}
                onClick={this.onClick}
                ButtonText={"View Exercises"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={legs}
                content={"Legs"}
                title={"Legs"}
                description={"NEVER skip leg day!"}
                onClick={this.onClick}
                ButtonText={"View Exercises"}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="4">
              <Cardi
                image={chest}
                content={"Chest"}
                title={"Chest"}
                description={"Do you even lift?"}
                onClick={this.onClick}
                ButtonText={"View Exercises"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={waist}
                content={"Waist"}
                title={"Waist/Abs"}
                description={"Abs are made here!"}
                onClick={this.onClick}
                ButtonText={"View Exercises"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={upperarm}
                content={"upperArm"}
                title={"Arms - Biceps/Triceps"}
                description={"Biceps for show, Triceps for go"}
                onClick={this.onClick}
                ButtonText={"View Exercises"}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="4">
              <Cardi
                image={neck}
                content={"Neck"}
                title={"Traps/Neck"}
                description={"Become a mountain"}
                onClick={this.onClick}
                ButtonText={"View Exercises"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={f2}
                content={"Forearm"}
                title={"Arms - Forearms"}
                description={"Better grip for when you need it the most"}
                onClick={this.onClick}
                ButtonText={"View Exercises"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={cardio}
                content={"Cardio"}
                title={"Cardio"}
                description={"Better your heart"}
                onClick={this.onClick}
                ButtonText={"View Exercises"}
              />
            </Col>
          </Row>
          <br />
          <br />
        </Container>
        <div class="footer bg-dark">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

ExerciseView.propTypes = {
  grabExerciseTable: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  auth: state.auth;
  profile: state.profile;
  exercise: state.exercise;
};

export default connect(
  mapStateToProps,
  { grabExerciseTable }
)(ExerciseView);

// export default ExerciseView;
