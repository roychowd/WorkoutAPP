import React, { Component } from "react";
import "./ExerciseView.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Cardi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    this.setState({ content: this.props.content });
  }

  onClick = e => {
    console.log("CLicked");
    let item = {
      params: {
        muscle: this.state.content
      }
    };
    this.props.grabExerciseTable(item, this.props.history);
  };

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.image}
            alt="Card image cap"
            className="img-fluid"
          />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.description}</CardText>
            <Button color="secondary" onClick={this.onClick}>
              View Exercises
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Cardi.propTypes = {
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
)(Cardi);
