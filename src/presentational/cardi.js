import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

// Presentational Component for UI/UX

// This component requires 4 props - img, title, description, and an onclick handelr
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
          <Button color="secondary" onClick={() => props.onClick(props.content)}>
            {props.ButtonText}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cardi;
