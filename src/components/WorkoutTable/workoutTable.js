import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import store from "../../store";
import { Container, Row, Col } from "reactstrap";
import { loadMuscle, fetchTableData } from "../../helpers/loadTableData";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./workoutTable.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

class workoutTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseList: "",
      rows: [],
      modalIsOpen: false,
      exerciseGif: "",
      exerciseComment: "",
      exerciseName: ""
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(item) {
    console.log(item);
    this.setState({
      modalIsOpen: true,
      exerciseComment: item.message,
      exerciseGif: item.gifURL,
      exerciseName: item.exerciseName
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount = () => {
    var loadedExerciseList = loadMuscle();
    const row = [];
    this.setState({ exerciseList: loadedExerciseList }, () => {
      console.log(this.state.exerciseList);
      console.log(typeof this.state.exerciseList);
      this.state.exerciseList.map(elem => {
        row.push(
          <a href="#" className="list-group-item">
            <div className="text-center">
              <h4>{elem.exerciseName}</h4>
            </div>
            <div className="text-center">
              <span>
                Type: {elem.categoryMuscle}, Force: {elem.force}, Mechanics:{" "}
                {elem.mechanics}
              </span>
            </div>
            <div>
              <button
                className="btn-primary"
                onClick={() => this.openModal(elem)}
              >
                View Exercise
              </button>
            </div>
          </a>
        );
        this.setState({ rows: row });
      });
    });
  };

  render() {
    return (
      <div>
        <Navbar loggedIn={true} />

        <Container className="mt-5">
          <Row>
            <Col sm="12">
              <h2 className="tc">Check out the Exercises!</h2>
            </Col>
          </Row>
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              className="modal-content"
            >
              <h2 ref={subtitle => (this.subtitle = subtitle)}>
                {this.state.exerciseName}
              </h2>
              <button onClick={this.closeModal}>close</button>
              <div>{this.state.exerciseComment}</div>
              <button>Add to WorkoutPlan</button>
            </Modal>
          </div>
          <br />
          <div className="tab-pane active">
            <div className="list-group">{this.state.rows}</div>
          </div>
          <br />
        </Container>
      </div>
    );
  }
}

export default workoutTable;
