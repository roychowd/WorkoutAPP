import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css'
import { Line, Circle } from 'rc-progress';

var loggedIn=true;
const Dashboard = (props) => {
  return(
    <div className='TheTopdiv'>
      <Navbar loggedIn={loggedIn}/>
      <div>
        <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
        <Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
      </div>
      <div class="row footer">
          <div class="col-sm-12 text-center btn-group">
              <button id="btnSearch" class="btn btn-dark btn-md center-block" Style="width: 50%;" OnClick="btnSearch_Click" >Create Workout Plan</button>
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
