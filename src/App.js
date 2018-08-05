import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup/Signup';
import Initialcalorie from './components/Initialcalorie/Initialcalorie';
import Profile from './components/Profile/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/Dashboard' component={Dashboard}/>
        <Route exact path='/Signup' component={Signup}/>
        <Route exact path='/Initialcalorie' component={Initialcalorie}/>
        <Route exact path='/Profile' component={Profile}/>
      </Switch>

    );
  }
}

export default App;
