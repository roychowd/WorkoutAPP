import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Link} from 'react-router-dom';
import './Dashboard.css'

var loggedIn=true;
var calories = Math.floor(((1000/2000)*100));
var calorieString = calories.toString() + "%";

<Link
  to="/CreateWorkPlan"
  ></Link>

const Dashboard = (props) => {
  return(
    <div className='TheTopdiv'>
      <Navbar loggedIn={loggedIn}/>
      <h5 className='calGoal'>Calorie Goal Progress:</h5>
      <div className='progress barTing'>
        <div className='progress-bar  progress-bar-striped progress-bar-animated' style={{width:`${calorieString}`,height:'20px'}}>{calorieString}</div>
      </div>
      <div class="row footer">
          <div class="col-sm-12 text-center btn-group">
              <Link to="/CreateWorkPlan" id="btnSearch" class="btn btn-dark btn-md center-block" Style="width: 50%;">Create Workout Plan</Link>
               <button id="btnClear" class="btn btn-secondary btn-md center-block" Style="width: 50%;" OnClick="btnClear_Click" >Create Diet Plan</button>
           </div>
      </div>
    </div>
  )
}

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

export default Dashboard;
