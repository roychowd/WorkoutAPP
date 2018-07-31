import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Homepage.css';

const Homepage = () => {
  return(
    <div className='topdiv'>
      <Navbar className='navbar'/>
      <div className='col1'>
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
              <button className="b ph3 pv2 input-reset ba b--black  bg-black grow pointer f6 dib datButton" type='submit'> Sign In</button>
            </div>
            <div className="lh-copy mt3 FormFontColor">
              <a href="#0" class="f6 link  dim FormFontColor db">Sign up</a>
              <a href="#0" class="f6 link dim FormFontColor db">Forgot your password?</a>
            </div>
          </form>
        </main>
      </div>
      <div className='col2'>Bye</div>
      <div className='col3'>Why</div>
    </div>
  )
}

export default Homepage;
