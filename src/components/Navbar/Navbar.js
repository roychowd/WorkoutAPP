import React,{Component} from 'react';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return(
      <ul className='topnav'>
        <li><a className="active" href="#home">Logo</a></li>
        <li style={{float:'center'}}><a href="#news">Workout App</a></li>
        <li className='right'><a href="#about">Sign Up</a></li>
        <li className='right'><a href="#contact">About</a></li>
      </ul>
    )
  }
}


export default Navbar;
