import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Homepage.css';
import GitLogo from './GitLogo.png';

const Homepage = () => {
  return(
    <div className='topdiv'>
      <Navbar className='navbar'/>
      {/* //==========HERE IS THE FIRST SECTION===========// */}
      <div className='col1'>
        {/* //===========HERE IS WHERE THE SIGN IN FORM IS DISPLAYED=======// */}
        <main className="pa4 80 FormFontColor">
          <form className="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent bg-black hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent bg-black hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
              </div>
              <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me </label>
            </fieldset>
            <div className="">
              {/* //Change this to a button pls */}
              <button href='/Dashboard' href='/Dashboard' className="b ph3 pv2 input-reset ba b--black  bg-black grow pointer f6 dib datButton" type='submit'>Sign In </button>
            </div>
            <div className="lh-copy mt3 FormFontColor">
              <a href="#0" class="f6 link  dim FormFontColor db">Sign up</a>
              <a href="#0" class="f6 link dim FormFontColor db">Forgot your password?</a>
            </div>
          </form>
        </main>
      </div>
      {/* //======SECOND BANNER========// */}
      <div className='col2'>
        <h2 className='peptalk'>Being able to track your Foods and Excercise is the key to achieving</h2>
        <h1 className='peptalk' style={{color:'white'}}>Your Fitness Goals!</h1>
        <h4 className='peptalk'>We wish to bring the message of a healthy lifestyle to the students of the University of Alberta, and provide them with the neccessary tools to do so!
        </h4>
        <h4 className='peptalk' >This app can help you:</h4>
        <ul className='pepList'>
          <li>
            1.Create Your own personal Meal Plan
            <br/>
            <br/>
            2.Personalize a Workout to meet your Training Style
            <br/>
            <br/>
            3.Find information about nutrition of various foods
            <br/>
            <br/>
            4.Links to other Amazing sources of health and lifestyle resources
          </li>
        </ul>
      </div>
      {/* //==============Third SECTION==========// */}
      <div className='col3'>
        <h3>Created by <a href='https://github.com/AnkushSharma2698'>Ankush Sharma</a> and <a href='https://github.com/roychowd'>Dhruba Chowdhury</a> </h3>
        <a href='https://github.com/roychowd/WorkoutAPP'><img className='gitLogo pointer' src={GitLogo}/></a>
      </div>
    </div>
  )
}

export default Homepage;
