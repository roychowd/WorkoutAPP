import React, { Component } from "react";
import moduleName from "./ExerciseView.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const Cardi = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={props.image}
          alt="Card image cap"
          className="img-fluid"
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.description}</CardText>
          <Button color="secondary">View Exercises</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cardi;
