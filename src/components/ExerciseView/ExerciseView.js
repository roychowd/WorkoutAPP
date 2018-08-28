import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import moduleName from "./ExerciseView.css";
import Cardi from "./cardView";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  UncontrolledCollapse,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  Table
} from "reactstrap";

import shoulders from "./WorkoutPictures/shoulders2.jpg";
import upperarm from "./WorkoutPictures/arms-triceps.jpg";
import forearm from "./WorkoutPictures/forearm.jpg";
import f2 from "./WorkoutPictures/forearm2.jpg";
import back from "./WorkoutPictures/back.jpg";
import waist from "./WorkoutPictures/waist.jpg";
import legs from "./WorkoutPictures/legs.jpg";
import neck from "./WorkoutPictures/neck.jpg";
import chest from "./WorkoutPictures/chest.jpg";
import cardio from "./WorkoutPictures/cardio.jpg";

class ExerciseView extends Component {
  constructor(props) {
    super(props);
  }

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
                title={"Shoulders"}
                description={"Train your shoulders to become boulders!"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={back}
                title={"Back"}
                description={"Build a stronger and bigger back!"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={legs}
                title={"Legs"}
                description={"NEVER skip leg day!"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Cardi
                image={chest}
                title={"Chest"}
                description={"Do you even lift?"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={waist}
                title={"Waist/Abs"}
                description={"Abs are made here!"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={upperarm}
                title={"Arms - Biceps/Triceps"}
                description={"Biceps for show, Triceps for go"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Cardi
                image={neck}
                title={"Traps/Neck"}
                description={"Become a mountain"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={f2}
                title={"Arms - Forearms"}
                description={"Better grip for when you need it the most"}
              />
            </Col>
            <Col sm="4">
              <Cardi
                image={cardio}
                title={"Cardio"}
                description={"Better your heart"}
              />
            </Col>
          </Row>
        </Container>
        <div class="footer bg-dark">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

export default ExerciseView;
