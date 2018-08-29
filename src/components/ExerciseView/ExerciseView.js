import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./ExerciseView.css";
import Cardi from "./cardView";
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

// Presentational Component for UI/UX
const ExerciseView = () => {
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
            />
          </Col>
          <Col sm="4">
            <Cardi
              image={back}
              content={"Back"}
              title={"Back"}
              description={"Build a stronger and bigger back!"}
            />
          </Col>
          <Col sm="4">
            <Cardi
              image={legs}
              content={"Legs"}
              title={"Legs"}
              description={"NEVER skip leg day!"}
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
            />
          </Col>
          <Col sm="4">
            <Cardi
              image={waist}
              content={"Waist"}
              title={"Waist/Abs"}
              description={"Abs are made here!"}
            />
          </Col>
          <Col sm="4">
            <Cardi
              image={upperarm}
              content={"upperArm"}
              title={"Arms - Biceps/Triceps"}
              description={"Biceps for show, Triceps for go"}
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
            />
          </Col>
          <Col sm="4">
            <Cardi
              image={f2}
              content={"Forearm"}
              title={"Arms - Forearms"}
              description={"Better grip for when you need it the most"}
            />
          </Col>
          <Col sm="4">
            <Cardi
              image={cardio}
              content={"Cardio"}
              title={"Cardio"}
              description={"Better your heart"}
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
};

export default ExerciseView;
