import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import moduleName from "./ExerciseView.css";
import {
  Container,
  Row,
  Col,
  UncontrolledCollapse,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  Table
} from "reactstrap";

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
            <Col sm="8">
              <h2 id="page-title" className="page-header">
                Exercises
              </h2>
            </Col>
            <Col sm="4">
              <h2 id="page-title" className="page-header">
                Search
              </h2>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col sm="8">
              <Button
                color="primary"
                size="lg"
                block
                id="toggler"
                style={{ marginBottom: "1rem" }}
              >
                Arms
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </UncontrolledCollapse>
              <Button
                color="primary"
                size="lg"
                block
                id="toggler2"
                style={{ marginBottom: "1rem" }}
              >
                Legs
              </Button>
              <UncontrolledCollapse toggler="#toggler2">
                <h3>heyy</h3>
              </UncontrolledCollapse>
              <Button
                color="primary"
                size="lg"
                block
                id="toggler3"
                style={{ marginBottom: "1rem" }}
              >
                Abs
              </Button>
              <UncontrolledCollapse toggler="#toggler3">
                <h3>heyy</h3>
              </UncontrolledCollapse>
              <Button
                color="primary"
                size="lg"
                block
                id="toggler4"
                style={{ marginBottom: "1rem" }}
              >
                Chest
              </Button>
              <UncontrolledCollapse toggler="#toggler4">
                <h3>heyy</h3>
              </UncontrolledCollapse>
              <Button
                color="primary"
                size="lg"
                block
                id="toggler5"
                style={{ marginBottom: "1rem" }}
              >
                Back
              </Button>
              <UncontrolledCollapse toggler="#toggler5">
                <h3>heyy</h3>
              </UncontrolledCollapse>
              <Button
                color="primary"
                size="lg"
                block
                id="toggler6"
                style={{ marginBottom: "1rem" }}
              >
                Shoulders
              </Button>
              <UncontrolledCollapse toggler="#toggler6">
                <h3>heyy</h3>
              </UncontrolledCollapse>
              <Button
                color="primary"
                size="lg"
                block
                id="toggler7"
                style={{ marginBottom: "1rem" }}
              >
                Calves
              </Button>
              <UncontrolledCollapse toggler="#toggler7">
                <h3>heyy</h3>
              </UncontrolledCollapse>
            </Col>
            <Col sm="4">
              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Search</Button>
                </InputGroupAddon>
              </InputGroup>
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
