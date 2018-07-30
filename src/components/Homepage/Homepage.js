import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Homepage.css';

const Homepage = () => {
  return(
    <div className='topdiv'>
      <Navbar className='navbar'/>
      <div className='col1'>
        <img src="http://homeexercise.co/wp-content/uploads/2015/12/fitness-exercise-products.jpg" alt="Nature" className="responsive"/>
      </div>
      <div className='col2'>Bye</div>
      <div className='col3'>Why</div>
    </div>
  )
}

export default Homepage;
