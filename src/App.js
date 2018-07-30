import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import './App.css';

class App extends Component {  
  render() {
    return (
      <Switch>
        <Route path='/' component={Homepage}/>
      </Switch>

    );
  }
}

export default App;
