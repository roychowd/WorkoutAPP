import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import Initialcalorie from "./components/Initialcalorie/Initialcalorie";
import Profile from "./components/Profile/Profile";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Initialcalorie" component={Initialcalorie} />
            <Route exact path="/Profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
