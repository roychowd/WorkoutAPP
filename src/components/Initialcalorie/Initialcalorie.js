import React from 'react';
import './Initialcalorie.css';

const Initialcalorie = () => {
  return(
    <div className='container'>
      <h1>To Personalize Your Profile We Need Some More Information:</h1>
      <small class="form-text text-muted">Why? In order to optimize your path to your goal!</small>
      <div class="form-group">
        <label>Daily Calorie Intake</label>
        <input type="" class="form-control" placeholder=""/>
      </div>
      <small class="form-text text-muted">If you aren't sure click here for some help!</small>
      <a target="_blank" rel="noopener noreferrer" href="https://tdeecalculator.net/" class="float-left btn btn-outline-primary mt-1">Calorie Calculator</a>
      <br/><br/><br/>
      <div class="form-group">
        <label>Level of Activity</label>
        <div class="container">

              <ul className='activityList'>
              <li className='activityItem'>
                <input type="radio" id="f-option" name="selector"/>
                <label for="f-option">Low</label>

                <div class="check"></div>
              </li>

              <li className='activityItem'>
                <input type="radio" id="s-option" name="selector"/>
                <label for="s-option">Medium</label>

                <div class="check"><div class="inside"></div></div>
              </li>

              <li className='activityItem'>
                <input type="radio" id="t-option" name="selector"/>
                <label for="t-option">High</label>

                <div class="check"><div class="inside"></div></div>
              </li>
            </ul>
            </div>
          </div>
        </div>
  );
}

export default Initialcalorie;
