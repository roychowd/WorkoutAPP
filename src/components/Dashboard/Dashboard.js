import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { loadCalories } from "../../helpers/loadName";
import "./Dashboard.css";

var loggedIn = true;
var cal = loadCalories();
var calories = Math.floor((cal / 2000) * 100);
var calorieString = calories.toString() + "%";

const Data = {
  labels: ["Protein", "Carbs", "Fat"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const Data2 = {
  labels: ["Calories-remaining", "Calories-Consumed"],
  datasets: [
    {
      data: [cal, 2000 - cal],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"]
    }
  ]
};

const Dashboard = props => {
  return (
    <div className="TheTopdiv">
      <Navbar loggedIn={loggedIn} />
      {/* <h5 className="calGoal">Calorie Goal Progress:</h5>
      <div className="progress barTing">
        <div
          className="progress-bar  progress-bar-striped progress-bar-animated"
          style={{ width: `${calorieString}`, height: "20px" }}
        >
          {calorieString}
        </div>
      </div> */}
      <div className="row mt-5 mb-5">
        <div className="col-lg-6">
          <div>
            <Doughnut
              data={Data}
              width={250}
              height={250}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div>
            <Doughnut
              data={Data2}
              width={250}
              height={250}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </div>
        </div>
      </div>

      <div class="row footer">
        <div class="col-sm-12 text-center btn-group">
          <Link
            to="/CreateWorkPlan"
            id="btnSearch"
            class="btn btn-dark btn-md center-block obi"
            Style="width: 50%;"
          >
            Create Workout Plan
          </Link>
          <Link
            to="/CreateDietPlan"
            id="btnClear"
            class="btn btn-secondary btn-md center-block obi"
            Style="width: 50%;"
            OnClick="btnClear_Click"
          >
            Create Diet Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

// function move() {
//   var elem = document.getElementById("myBar");
//   var width = 1;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + "%";
//     }
//   }
// }

export default Dashboard;
