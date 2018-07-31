import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/Dashboard' component={Dashboard}/>
      </Switch>

    );
  }
}

export default App;
