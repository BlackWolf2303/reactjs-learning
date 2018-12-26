import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import ProtectedForm from "./components/ProtectedForm";
import {fakeAuth} from './components/fakeAuth';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true ? <Component{...props}/> : <Redirect to='/sign-in'/>
  )}/>
  )

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <h2>Login form with Router</h2>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
                Sign in
              </NavLink>
              <NavLink to="/" exact activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">
                Sign In
              </NavLink>
              or
              <NavLink to="/" exact activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">
                Sign Up
              </NavLink>
              <NavLink to="/protected" exact activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">
                Protected
              </NavLink>
            </div>

            <Switch>
            <Route exact path="/" component={SignUpForm}></Route>            
            <Route path="/sign-in" component={SignInForm}></Route>
            <PrivateRoute path="/protected" component={ProtectedForm}/>
            <Route component={()=> <h2>HTTP 404 error</h2>}></Route>
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
