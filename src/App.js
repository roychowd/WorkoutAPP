import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import Initialcalorie from "./components/Initialcalorie/Initialcalorie";
import Profile from "./components/Profile/Profile";
import WorkoutPlan from "./components/WorkoutPlan/WorkoutPlan";
import DietPlan from './components/DietPlan/DietPlan';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <AuthenticatedRoute path="/Dashboard" component={Dashboard} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Initialcalorie" component={Initialcalorie} />
        <AuthenticatedRoute exact path="/CreateWorkPlan" component={WorkoutPlan}/>
        <AuthenticatedRoute exact path="/CreateDietPlan" component={DietPlan}/>
        <AuthenticatedRoute exact path="/Profile" component={Profile} />
      </Switch>
    );
  }
}

// this function determines if the jwtToken is recieved and redirects to the dashboard. If no user token is recieved then the route will not switch to dashboard
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("jwtToken") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
export default App;
