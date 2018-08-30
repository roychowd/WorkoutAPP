import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

// class Cardi extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: ""
//     };
//   }

//   componentDidMount() {
//     this.setState({ content: this.props.content });
//   }

//   onClick = e => {
//     console.log("CLicked");
//     let item = {
//       params: {
//         muscle: this.state.content
//       }
//     };
//     this.props.grabExerciseTable(item, this.props.history);
//   };

//   render() {
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
//   }
// }

// Cardi.propTypes = {
//   grabExerciseTable: PropTypes.func.isRequired
// };

// const mapStateToProps = state => {
//   auth: state.auth;
//   profile: state.profile;
//   exercise: state.exercise;
// };

// export default connect(
//   mapStateToProps
// )(Cardi);

export default Cardi;
