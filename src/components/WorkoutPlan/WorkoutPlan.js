import React from "react";
import Navbar from "../Navbar/Navbar";
import "./WorkoutPlan.css";
import rope from "./rope.jpg";
import image1 from "./image1.png";
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
                <h4 className="card-title">Add Workout</h4>
                <p className="card-text">
                  Search for specific exercises (or create your own) and add
                  them to your personal plan!
                </p>
                <button type="button float-right" class="btn btn-secondary">
                  Secondary
                </button>
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
              <button type="button float-right" class="btn btn-primary">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
