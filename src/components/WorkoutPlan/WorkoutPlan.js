import React from "react";
import Navbar from "../Navbar/Navbar";
import "./WorkoutPlan.css";
import rope from "./rope.jpg";
import image1 from "./image1.png";
import { Link } from "react-router-dom";
const WorkoutPlan = () => {
  return (
    <div>
      <Navbar loggedIn={true} />
      <div className="row">
        <div className="col-lg-6 mt-5 by">
          <div className="bs-component">
            <div
              className="card text-white bg-primary mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <img className="img-fluid" src={rope} alt="" />
              <div className="card-body">
                <h4 className="card-title">View Exercises</h4>
                <p className="card-text">
                  Search for specific exercises (or create your own) and add
                  them to your personal plan!
                </p>
                <Link to="/exercise/overview" id="addBtn" class="btn btn-secondary">
                  {/* <button type="button float-right" class="btn btn-secondary"> */}
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5 hi">
          <div
            className="card border-primary mb-3"
            style={{ maxWidth: "20rem" }}
          >
            <img className="img-fluid" src={image1} alt="" />
            <div className="card-body">
              <h4 className="card-title">View Your Workout Schedule!</h4>
              <p className="card-text">
                Click here to view your daily workout routine!
              </p>
              <Link to="/viewWorkout" id="addBtn" class="btn btn-primary">
                View
              </Link>
              {/* <button type="button float-right" class="btn btn-primary">
                View
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
